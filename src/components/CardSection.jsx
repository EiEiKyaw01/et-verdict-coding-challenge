import React from 'react'
import Card from './Card'
import useStore from '../store/useStore'
import NoResultsImage from '../assets/undraw_page-not-found_6wni.svg'

const CardSection = () => {
  const posts = useStore((state) => state.posts);
  const searchQuery = useStore((state) => state.searchQuery);
  const isLoading = useStore((state) => state.isLoading);
  const error = useStore((state) => state.error);

  const filteredPosts = React.useMemo(() => {
    if (!searchQuery.trim()) {
      return posts.slice(0, 10);
    }
    
    return posts
      .filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.body.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .slice(0, 10); 
  }, [posts, searchQuery]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center mt-10">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2B2D42]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center mt-10">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  if (!filteredPosts || filteredPosts.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center mt-10">
        <img 
          src={NoResultsImage} 
          alt="No results illustration" 
          className="w-48 h-48 mb-4"
        />
        <div className="text-gray-500">No posts found matching your search</div>
      </div>
    );
  }

  return (
    <div>
      <section className="max-w-[1200px] mt-10 flex flex-wrap justify-center gap-5 m-auto">
        {filteredPosts.map((post) => (
          <Card 
            key={post.id} 
            title={post.title || 'No Title'} 
            body={post.body || 'No Content'} 
          />
        ))}
      </section>
    </div>
  );
}

export default CardSection;