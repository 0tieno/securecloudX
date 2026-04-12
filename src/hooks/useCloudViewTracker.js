import { useEffect, useState } from "react";

const STORAGE_KEY = "blog_views";

const readStoredViews = () => {
  try {
    const rawViews = localStorage.getItem(STORAGE_KEY);
    return rawViews ? JSON.parse(rawViews) : {};
  } catch (error) {
    console.error("Error reading blog views:", error);
    return {};
  }
};

const writeStoredViews = (views) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(views));
  } catch (error) {
    console.error("Error persisting blog views:", error);
  }
};

const getViews = async (postId) => {
  if (!postId) {
    return 0;
  }

  const views = readStoredViews();
  return views[postId] ?? 0;
};

const trackView = async (postId) => {
  if (!postId) {
    return 0;
  }

  const views = readStoredViews();
  const nextCount = (views[postId] ?? 0) + 1;
  views[postId] = nextCount;
  writeStoredViews(views);
  return nextCount;
};

const getAllViews = async () => readStoredViews();

export const useCloudViewTracker = (postId) => {
  const [views, setViews] = useState(0);
  const [loading, setLoading] = useState(Boolean(postId));

  useEffect(() => {
    let isActive = true;

    if (!postId) {
      setLoading(false);
      return undefined;
    }

    const loadViews = async () => {
      setLoading(true);
      const nextCount = await getViews(postId);

      if (isActive) {
        setViews(nextCount);
        setLoading(false);
      }
    };

    loadViews();

    return () => {
      isActive = false;
    };
  }, [postId]);

  return { views, loading, trackView, getViews, getAllViews };
};

export const useAllViews = () => {
  const [allViews, setAllViews] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isActive = true;

    const fetchAllViews = async () => {
      setLoading(true);
      const viewCounts = await getAllViews();

      if (isActive) {
        setAllViews(viewCounts);
        setLoading(false);
      }
    };

    fetchAllViews();

    return () => {
      isActive = false;
    };
  }, []);

  return { allViews, loading };
};
