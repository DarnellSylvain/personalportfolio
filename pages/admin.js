import React, { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

export default function Admin() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="flex items-center justifu-center h-screen">
      <div className=" mx-auto text-center">
        <form className="flex flex-col">
          <h1 className="text-2xl mb-4">Admin Dashboard</h1>
          <input
            type="password"
            placeholder="Enter Password"
            className="text-center mb-4 border-2 border-gray-100"
          />
          <button className="bg-blue-500 w-max py-1 px-4 mx-auto rounded-md">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
