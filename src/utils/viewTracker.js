// View tracking utility
const VIEW_STORAGE_KEY = 'blog_post_views';

class ViewTracker {
  constructor() {
    this.views = this.loadViews();
  }

  loadViews() {
    try {
      const stored = localStorage.getItem(VIEW_STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch (error) {
      console.error('Error loading view data:', error);
      return {};
    }
  }

  saveViews() {
    try {
      localStorage.setItem(VIEW_STORAGE_KEY, JSON.stringify(this.views));
    } catch (error) {
      console.error('Error saving view data:', error);
    }
  }

  incrementView(postId) {
    if (!postId) return;
    
    this.views[postId] = (this.views[postId] || 0) + 1;
    this.saveViews();
    return this.views[postId];
  }

  getViews(postId) {
    return this.views[postId] || 0;
  }

  getAllViews() {
    return { ...this.views };
  }
}

// Create a singleton instance
export const viewTracker = new ViewTracker();

// Hook for components to use view tracking
export const useViewTracker = (postId) => {
  const [views, setViews] = React.useState(viewTracker.getViews(postId));

  React.useEffect(() => {
    if (postId) {
      // Increment view on mount
      const newViews = viewTracker.incrementView(postId);
      setViews(newViews);
    }
  }, [postId]);

  return views;
};

// For React import
import React from 'react';
