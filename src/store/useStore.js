import { create } from 'zustand'

const useStore = create((set) => ({
  posts: [],
  searchQuery: '',
  isLoading: false,
  error: null,
  
  setPosts: (posts) => set({ posts }),
  
  setSearchQuery: async (query) => {
    set({ isLoading: true });
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    set({ 
      searchQuery: query,
      isLoading: false 
    });
  },
  
  fetchPosts: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) throw new Error('Failed to fetch posts');
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const data = await response.json();
      set({ posts: data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  }
}));

export default useStore; 