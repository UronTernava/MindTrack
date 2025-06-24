import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          {/* Brain icon with pulse animation */}
          <div className="text-6xl mb-4 animate-pulse">
            🧠
          </div>
          
          {/* Loading dots */}
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
        
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-4">
          MindTrack
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Loading your mental wellness journey...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen; 