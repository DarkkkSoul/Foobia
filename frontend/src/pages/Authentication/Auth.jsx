import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../Footer';

function Auth() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setTimeout(() => {
          if (data.data.user.email === 'admin@gmail.com') {
            navigate('/admin/cafeteria');
          } else {
            navigate('/cafeteria');
          }
        }, 1000)
      } else {
        setMessage(data.errorMessage);
      }

      setTimeout(() => {
        setName('');
        setEmail('');
        setPassword('');
      }, 1000);
    } catch (error) {
      console.log('ERROR:', error);
    }
  }
  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage('');
      }, 1500);
    }
  })
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-fuchsia-500 to-purple-800 p-6">
        <div className="flex flex-col md:flex-row bg-white/30 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full">

          {/* Left Side: Illustration / Branding */}
          <div className="hidden md:flex flex-col justify-center items-center bg-gray-200/80 w-1/2 p-1">
            <img
              src="/foodImages/leftpanel-login.png" // replace with your food-themed illustration
              alt="Food Illustration"
              className='rounded-xl'
            />
          </div>

          {/* Right Side: Login Form */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-bold text-purple-950 mb-1 tracking-tight text-center">Welcome back to Foobia</h2>
            <p className='text-sm text-white/100 italic text-center mb-4'>"Back for seconds? We’ve got you!"</p>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label className="text-md font-semibold tracking-normal text-white">Email</label>
                <input
                  type="email"
                  placeholder="e.g-smriti@gmail.com"
                  className="border-2 border-white/50 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-md font-semibold tracking-normal text-white">Password</label>
                <input
                  type="password"
                  placeholder="e.g-Smriti@123"
                  className="border-2 border-white/50 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="mt-4 bg-purple-700 text-white py-2 rounded-md hover:scale-105 hover:bg-purple-800 transition-transform duration-300"
              >
                Log In
              </button>
            </form>
            <div className="text-sm text-center pt-3">
              Don’t have an <Link to={'/signup'} className="underline font-semibold">account</Link>?
            </div>
            {message && (
              <p className="text-purple-700 mt-4 text-center text-xs">{message}</p>
            )}
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Auth;
