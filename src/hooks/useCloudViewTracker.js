import { useState, useEffect } from 'react';
import { cloudViewTracker } from '../services/cloudViewTracker';

export const useCloudViewTracker = (postId) => {
  const [views, setViews] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!postId) {
      setLoading(false);
      return;
    }

    const trackAndGetViews = async () => {
      setLoading(true);
      
      try {
        // Track the view
        const newViewCount = await cloudViewTracker.trackView(postId);
        setViews(newViewCount);
      } catch (error) {
        console.error('Error tracking view:', error);
        // Fallback to getting existing count
        const existingCount = await cloudViewTracker.getViews(postId);
        setViews(existingCount);
      } finally {
        setLoading(false);
      }
    };

    trackAndGetViews();
  }, [postId]);

  return { views, loading };
};

export const useAllViews = () => {
  const [allViews, setAllViews] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllViews = async () => {
      setLoading(true);
      
      try {
        const viewCounts = await cloudViewTracker.getAllViews();
        setAllViews(viewCounts);
      } catch (error) {
        console.error('Error fetching all views:', error);
        setAllViews({});
      } finally {
        setLoading(false);
      }
    };

    fetchAllViews();
  }, []);

  return { allViews, loading };
};
