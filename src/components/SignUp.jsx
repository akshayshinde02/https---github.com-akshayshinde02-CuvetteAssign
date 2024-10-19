import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';

const SignUp = () => {

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [companyEmail, setCompanyEmail] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [companySize, setCompanySize] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    
    const API_URL = "http://localhost:5000/api/index/signup";

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        
        setLoading(true);
        setError(null);
        setSuccess(false);

        
        const userData = {
            name,
            phoneNumber,
            companyEmail,
            companyName,
            companySize
        };

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });

            const data = await response.json();

            if (response.ok) {
                // Handle success
                setSuccess(true);
                console.log("User registered successfully:", data);
                navigate('/otp')

            } else {
                // Handle errors
                setError(data.message || "Failed to register user");
                console.error("Error:", data);
            }

        } catch (err) {
            setError("Server error, please try again later");
            console.error("Error:", err);
        } finally {
            // Reset loading state
            setLoading(false);
        }
    };

    return (
        <>
            <div className='flex flex-col md:flex-row gap-4 p-6'>
                <div className='md:w-1/2 text-center mt-52'>
                    <p className='text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae ex possimus culpa itaque a quia adipisci quas nam quo vero nulla, amet soluta, placeat quaerat eligendi et est ullam.
                    </p>
                </div>

               
                <div className='md:w-1/2 border-4 border-yellow-300 p-8 rounded-lg bg-white shadow-lg'>
                    <h3 className='text-center text-2xl font-bold mb-4'>Sign Up</h3>
                    <p className='text-center text-gray-500 mb-6'>Lorem lapsum is simple dummy text</p>

                    <form onSubmit={handleSubmit}>
                        <div className='space-y-4'>
                            <span className='block'>
                                <input
                                    type='text'
                                    placeholder='Name'
                                    value={name}
                                    className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300'
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </span>
                            <span className='block'>
                                <input
                                    type='text'
                                    placeholder='Phone no.'
                                    value={phoneNumber}
                                    className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300'
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </span>
                            <span className='block'>
                                <input
                                    type='text'
                                    placeholder='Company Name'
                                    value={companyName}
                                    className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300'
                                    onChange={(e) => setCompanyName(e.target.value)}
                                />
                            </span>
                            <span className='block'>
                                <input
                                    type='email'
                                    placeholder='Company Email'
                                    value={companyEmail}
                                    className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300'
                                    onChange={(e) => setCompanyEmail(e.target.value)}
                                />
                            </span>
                            <span className='block'>
                                <input
                                    type='number'
                                    placeholder='Company Size'
                                    value={companySize}
                                    className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300'
                                    onChange={(e) => setCompanySize(e.target.value)}
                                />
                            </span>
                            <span className='block text-center'>
                                <button
                                    type='submit'
                                    className='bg-purple-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500'
                                    disabled={loading}
                                >
                                    {loading ? "Submitting..." : "Proceed"}
                                </button>
                            </span>
                        </div>
                    </form>

                    {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                    {success && <p className="text-green-500 text-center mt-4">User registered successfully!</p>}
                </div>
            </div>
        </>
    );
}

export default SignUp;
