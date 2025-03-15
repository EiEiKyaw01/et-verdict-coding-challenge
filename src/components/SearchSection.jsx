import React, { useState } from "react";
import useStore from "../store/useStore";

const SearchSection = () => {
   const setSearchQuery = useStore((state) => state.setSearchQuery);
   const searchQuery = useStore((state) => state.searchQuery);
   const [inputValue, setInputValue] = useState('');

   const handleSearch = (e) => {
      setInputValue(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setSearchQuery(inputValue);
   };

   return (
      <form onSubmit={handleSubmit} className="max-w-[600px] pt-5 flex gap-2 m-auto">
         <input
            type="text"
            value={inputValue}
            className="bg-gray-50 border border-[#2B2D42] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block flex-grow p-2.5"
            placeholder="Search by title or body..."
            onChange={handleSearch}
         />
         <button 
            type="submit"
            className="bg-[#2B2D42] border text-sm rounded-lg p-2.5 hover:bg-[#3e4259] transition-colors"
         >
            <svg
               width="24"
               height="24"
               viewBox="0 0 24 25"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
               className="w-12 h-6"
            >
               <path
                  d="M11.2498 5.75037C10.8356 5.75037 10.4998 6.08615 10.4998 6.50037C10.4998 6.91458 10.8356 7.25037 11.2498 7.25037C13.874 7.25037 16.0011 9.37718 16.0011 12.0004C16.0011 12.4146 16.3369 12.7504 16.7511 12.7504C17.1653 12.7504 17.5011 12.4146 17.5011 12.0004C17.5011 8.54842 14.7021 5.75037 11.2498 5.75037Z"
                  fill="#EDF2F4"
               />
               <path
                  d="M2 11.9989C2 6.89126 6.14154 2.75098 11.25 2.75098C16.3585 2.75098 20.5 6.89126 20.5 11.9989C20.5 14.2836 19.6714 16.3747 18.2983 17.9883L21.7791 21.4695C22.072 21.7624 22.072 22.2372 21.7791 22.5301C21.4862 22.823 21.0113 22.823 20.7184 22.5301L17.2372 19.0486C15.6237 20.4197 13.5334 21.2469 11.25 21.2469C6.14154 21.2469 2 17.1066 2 11.9989ZM11.25 4.25098C6.96962 4.25098 3.5 7.72003 3.5 11.9989C3.5 16.2779 6.96962 19.7469 11.25 19.7469C15.5304 19.7469 19 16.2779 19 11.9989C19 7.72003 15.5304 4.25098 11.25 4.25098Z"
                  fill="#EDF2F4"
                  fillRule="evenodd"
                  clipRule="evenodd"
               />
            </svg>
         </button>
      </form>
   );
};

export default SearchSection;
