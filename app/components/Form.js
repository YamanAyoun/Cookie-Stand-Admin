'use client'
import React, { useState } from "react";

function Form() {
  // Define the initial state for formData
  const [formData, setFormData] = useState({
    Location: "",
    minCustomersPerHour: "",
    maxCustomersPerHour: "",
    avgCookiesPerSale: "",
  });

  // Define the handleInputChange function
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Define the handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a JSON object from the form data
    const newData = {
      Location: formData.Location,
      minCustomersPerHour: formData.minCustomersPerHour,
      maxCustomersPerHour: formData.maxCustomersPerHour,
      avgCookiesPerSale: formData.avgCookiesPerSale,
    };

    // Retrieve existing data from local storage or initialize an empty array
    const savedData = JSON.parse(localStorage.getItem("formData")) || [];

    // Add the new data to the array
    savedData.push(newData);

    // Save the updated array back to local storage
    localStorage.setItem("formData", JSON.stringify(savedData));

    // Clear the form after submission
    setFormData({
      Location: "",
      minCustomersPerHour: "",
      maxCustomersPerHour: "",
      avgCookiesPerSale: "",
    });
  };

  return (
    <div className="h-screen">
      <form
        className="bg-emerald-400 rounded-lg p-8 m-20"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl text-center p-2 font-bold">
          Cookies Stand Admin
        </h2>
        <div className="p-5">
          <label htmlFor="Location">Location</label>
          <br />
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            id="Location"
            name="Location"
            value={formData.Location}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-wrap -mx-3 mb-2 p-5">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="minCustomersPerHour"
            >
              Minimum Customers per Hour
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="minCustomersPerHour"
              type="text"
              name="minCustomersPerHour"
              value={formData.minCustomersPerHour}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="maxCustomersPerHour"
            >
              Maximum Customers per Hour
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="maxCustomersPerHour"
              type="text"
              name="maxCustomersPerHour"
              value={formData.maxCustomersPerHour}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="avgCookiesPerSale"
            >
              Average Cookies per Sale
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="avgCookiesPerSale"
              type="text"
              name="avgCookiesPerSale"
              value={formData.avgCookiesPerSale}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-black py-1 px-2 rounded"
          type="submit"
        >
          Create
        </button>
      </form>

      <div className="m-20">
        <h2 className="text-xl font-bold">Saved Data</h2>
        {localStorage.getItem("formData") ? (
          <table className="border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-400 p-2">Location</th>
                <th className="border border-gray-400 p-2">
                  Minimum Customers per Hour
                </th>
                <th className="border border-gray-400 p-2">
                  Maximum Customers per Hour
                </th>
                <th className="border border-gray-400 p-2">
                  Average Cookies per Sale
                </th>
              </tr>
            </thead>
            <tbody>
              {JSON.parse(localStorage.getItem("formData")).map((data, index) => (
                <tr key={index}>
                  <td className="border border-gray-400 p-2">{data.Location}</td>
                  <td className="border border-gray-400 p-2">
                    {data.minCustomersPerHour}
                  </td>
                  <td className="border border-gray-400 p-2">
                    {data.maxCustomersPerHour}
                  </td>
                  <td className="border border-gray-400 p-2">
                    {data.avgCookiesPerSale}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
}

export default Form;
