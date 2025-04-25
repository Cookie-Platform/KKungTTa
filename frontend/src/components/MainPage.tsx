// src/components/MainPage.tsx
import React from 'react';

export default function MainPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold text-white mb-8">끝말잇기 게임</h1>
        
        <button className="px-10 py-6 text-3xl font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-xl">
          게임 시작
        </button>
      </div>
    </div>
  );
}
