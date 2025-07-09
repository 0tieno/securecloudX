class CloudViewTracker {
  constructor() {
    // We'll set this after deploying Azure Functions
    this.baseUrl = import.meta.env.VITE_AZURE_FUNCTIONS_URL || '';
    this.cache = new Map();
    this.isEnabled = !!this.baseUrl;
    this.sessionId = this.generateSessionId();
  }

  generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  invalidateCache(blogId) {
    if (blogId) {
      this.cache.delete(blogId);
    } else {
      this.cache.clear();
    }
  }

  async trackView(blogId) {
    if (!this.isEnabled || !blogId) return 0;
    
    try {
      const response = await fetch(`${this.baseUrl}/api/track-view`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          blogId: blogId,
          sessionId: this.sessionId
        })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        // Invalidate cache to get fresh data
        this.invalidateCache(blogId);
        return await this.getViews(blogId);
      }
    } catch (error) {
      console.error('Error tracking view:', error);
      // Fallback to localStorage for offline functionality
      return this.trackViewLocally(blogId);
    }
    return 0;
  }

  async getViews(blogId) {
    if (!this.isEnabled || !blogId) return 0;
    
    // Check cache first
    if (this.cache.has(blogId)) {
      return this.cache.get(blogId);
    }

    try {
      const response = await fetch(`${this.baseUrl}/api/views/${blogId}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.viewCount !== undefined) {
        this.cache.set(blogId, data.viewCount);
        return data.viewCount;
      }
    } catch (error) {
      console.error('Error getting views:', error);
      // Fallback to localStorage
      return this.getViewsLocally(blogId);
    }
    return 0;
  }

  async getAllViews() {
    if (!this.isEnabled) return {};
    
    try {
      const response = await fetch(`${this.baseUrl}/api/views`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Update cache
      Object.entries(data || {}).forEach(([blogId, count]) => {
        this.cache.set(blogId, count);
      });
      
      return data || {};
    } catch (error) {
      console.error('Error getting all views:', error);
      return this.getAllViewsLocally();
    }
  }

  // Fallback methods using localStorage
  trackViewLocally(blogId) {
    try {
      const views = JSON.parse(localStorage.getItem('blog_views') || '{}');
      views[blogId] = (views[blogId] || 0) + 1;
      localStorage.setItem('blog_views', JSON.stringify(views));
      this.cache.set(blogId, views[blogId]);
      return views[blogId];
    } catch (error) {
      console.error('Error with localStorage:', error);
      return 0;
    }
  }

  getViewsLocally(blogId) {
    try {
      const views = JSON.parse(localStorage.getItem('blog_views') || '{}');
      const count = views[blogId] || 0;
      this.cache.set(blogId, count);
      return count;
    } catch (error) {
      console.error('Error with localStorage:', error);
      return 0;
    }
  }

  getAllViewsLocally() {
    try {
      const views = JSON.parse(localStorage.getItem('blog_views') || '{}');
      // Update cache
      Object.entries(views).forEach(([blogId, count]) => {
        this.cache.set(blogId, count);
      });
      return views;
    } catch (error) {
      console.error('Error with localStorage:', error);
      return {};
    }
  }
}

export const cloudViewTracker = new CloudViewTracker();
