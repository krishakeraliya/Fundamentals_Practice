import React, { useState } from "react";

export default function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen transition-colors duration-300 ${
        isOn ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-3xl font-bold mb-4">
        Dark Mode: {isOn ? "ON" : "OFF"}
      </h1>

      <h2 className="text-xl mb-6">
        {isOn ? "Dark Mode Enabled" : "Dark Mode Disabled"}
      </h2>

      <button
        onClick={() => setIsOn((prev) => !prev)}
        className={`px-6 py-2 rounded-lg font-semibold transition 
        ${
          isOn
            ? "bg-yellow-400 text-black hover:bg-yellow-300"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
}
