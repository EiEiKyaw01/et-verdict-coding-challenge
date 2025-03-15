import React, { useEffect } from "react";
import SearchSection from "./components/SearchSection";
import CardSection from "./components/CardSection";
import useStore from "./store/useStore";

const App = () => {
  const fetchPosts = useStore((state) => state.fetchPosts);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className="bg-[#EDF2F4] min-h-screen p-5">
      <SearchSection />
      <CardSection />
    </div>
  );
};

export default App;
