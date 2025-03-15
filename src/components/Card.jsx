import React from 'react'

const Card = ({ title, body }) => {
  return (
     <div className="group bg-[#c6bade] w-[350px] p-5 rounded-xl shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300">
        <h1 className="font-bold mb-3 text-[#4a3267] line-clamp-1 group-hover:line-clamp-none">{title.toUpperCase()}</h1>
        <hr />
        <p className="text-justify text-[#333] mt-2 line-clamp-3 group-hover:line-clamp-none">{body}</p>
     </div>
  );
}

export default Card