import React from 'react';

function Card({ icon, text, para }) {  
  return (
    <div className="max-w-sm p-6 bg-transparent rounded-lg border-4 border-blue-500 shadow-lg w-[460px] h-[470px] ml-8 mb-8 hover:shadow-zinc-500 ">
      <div className="flex justify-between items-center mb-4 pt-16">
        <h2 className="text-2xl font-semibold text-gray-900 ">
          {text || "Default Text"} 
        </h2>
        <div className="p-2 rounded">
          {icon || <span>🔧</span>} 
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed">
        {para || "Default paragraph text."} 
      </p>
    </div>
  );
}

export default Card;
