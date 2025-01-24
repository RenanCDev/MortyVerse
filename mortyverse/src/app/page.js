import React from "react";

export default function HelloWorldApp() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4 animate-fade-in">
          Hello, World!
        </h1>
        <p className="text-xl text-white opacity-90">
          Welcome to your professional React/Next.js app.
        </p>
      </div>
    </div>
  );
}
