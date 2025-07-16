import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
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

  const [signInName, setSignInName] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signInMessage, setSignInMessage] = useState('');
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {

      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/signup`, {
        method: "POST",
        body: JSON.stringify({ name: signInName, email: signInEmail, password: signInPassword }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
      });

      const data = await response.json();

      if (response.ok) {
        setSignInMessage(data.message);
        setTimeout(() => {
          if (data.data.user.email === 'admin@gmail.com') {
            navigate('/admin/cafeteria');
          } else {
            navigate('/cafeteria');
          }
        }, 1000)
      } else {
        setSignInMessage(data.errorMessage);
      }

      setTimeout(() => {
        setSignInName('');
        setSignInEmail('');
        setSignInPassword('');
      }, 1000);
    } catch (error) {
      console.log('ERROR:', error);
    }
  }

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-fuchsia-500 to-purple-800 p-6">
        <div className="w-4xl bg-white/30 backdrop-blur-md rounded-xl shadow-lg py-20 flex justify-evenly">

          {/* signUp Form */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">Welcome - SignIn </h2>
            <form className="flex flex-col gap-4" onSubmit={handleSignUp}>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={signInName}
                  onChange={(e) => setSignInName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={signInEmail}
                  onChange={(e) => setSignInEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={signInPassword}
                  onChange={(e) => setSignInPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="mt-4 bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition duration-300"
              >
                SignUp
              </button>
            </form>
            <div className='text-sm text-center pt-1.5'>Already have an <span className='underline'>account</span>?</div>
            {signInMessage && <p className="text-purple-700 mt-4 text-center text-xs">{signInMessage}</p>}
          </div>


          {/* Login Form */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">Welcome Back</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="mt-4 bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition duration-300"
              >
                LogIn
              </button>
            </form>
            <div className='text-sm text-center pt-1.5'>Don't have an <span className='underline'>account</span>?</div>
            {message && <p className="text-purple-700 mt-4 text-center text-xs">{message}</p>}
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Auth;
