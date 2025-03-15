import React from 'react'

const Card = ({ title, body }) => {
  return (
     <div className="bg-[#8D99AE] w-[350px] p-5 rounded-2xl shadow-xl hover:scale-105 transition-transform">
        <h1 className="font-bold mb-3">{title.toUpperCase()}</h1>
        <p className="text-justify">{body}</p>
     </div>
  );
}

export default Card