import { useState } from "react";
import { PlusIcon, MinusIcon } from "../components/Icons";

export default function AdminDashboard() {
  return (
    <div className="flex items-center justifu-center h-screen">
      <div className=" mx-auto">
        <form className="flex flex-col mt-4">
          <label htmlFor="name" className="text-sm mb-2 mt-4">
            Project Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="border p-1 mb-3"
          ></input>
          <label htmlFor="description" className="text-sm mb-2">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            className="border h-18 p-1"
            rows="4"
            cols="2"
            required
          ></textarea>

          <label htmlFor="github" className="text-sm mb-2 mt-4">
            Githib Url
          </label>
          <input
            type="text"
            name="github"
            id="github"
            required
            className="border p-1"
          ></input>
          <label htmlFor="live" className="text-sm mb-2 mt-4">
            Live Url
          </label>
          <input
            type="name"
            name="live"
            id="live"
            required
            className="border p-1"
          ></input>
          <label htmlFor="live" className="text-sm mb-2 mt-4">
            Technologies
          </label>
          <div className="flex">
            <input
              type="name"
              name="live"
              id="live"
              placeholder="Enter Technologies"
              required
              className="border p-1 mr-4"
            />
            <div className="my-auto">
              <PlusIcon className="w-3" />
            </div>
          </div>

          <button
            type="submit"
            className="bg-gray-500 mt-4 w-36 text-white border-0 py-2 mx-auto"
          >
            Post Project
          </button>
        </form>
      </div>
    </div>
  );
}
