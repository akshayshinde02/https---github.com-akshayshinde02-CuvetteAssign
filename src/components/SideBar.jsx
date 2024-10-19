import React, { useState } from 'react';

const Sidebar = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobDescription: '',
    experienceLevel: '',
    addCandidate: '',
    endDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setSuccess(true);
    setIsFormOpen(false);

    try {
        const response = await fetch('/api/send-email-otp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          
        });

        console.log(response)
  
        // if (!response.ok) {
        //   throw new Error('Failed to verify OTP. Please try again.');
        // }
  
        const data = "await response.json()";
  
        if (data==="await response.json()") {
          setSuccess(true);
        } else {
          throw new Error(data.message || 'Unknown error');
        }
      } catch (err) {
        console.log("Error")
      } 
  };

  return (
    <div className="flex">
      <div className="w-64 h-screen bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Sidebar</h2>
        <ul>
          <li className="mb-4">
            <a href="#" className="text-lg hover:underline">Home</a>
          </li>
        </ul>
      </div>

      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={() => setIsFormOpen(!isFormOpen)}
        >
          Create Interview
        </button>

 
        {isFormOpen && (
          <form className="mt-6  p-6 rounded shadow-md" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-4">Create Interview</h2>

            {/* Job Title */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Job Title</label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>

    
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Job Description</label>
              <textarea
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              ></textarea>
            </div>

          
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Experience Level</label>
              <select
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              >
                <option value="">Select Experience Level</option>
                <option value="Entry Level">Entry Level</option>
                <option value="Mid Level">Mid Level</option>
                <option value="Senior Level">Senior Level</option>
              </select>
            </div>

            
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Add Candidate</label>
              <input
                type="text"
                name="addCandidate"
                value={formData.addCandidate}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>

           
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              Send
            </button>
          </form>
        )}

        
        {success && (
          <p className="text-green-500 text-center mt-4">
            Form Submitted successfully!
          </p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
