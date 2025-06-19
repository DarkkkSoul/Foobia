import React, { useState } from 'react';

function Auth() {

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');


   return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-fuchsia-500 to-purple-800 p-6">
         <div className="w-4xl max-w-6xl bg-white/30 backdrop-blur-md rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 p-10">

            {/* Sign Up Form */}
            <div className="bg-white rounded-xl p-8 shadow-md">
               <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">Create Account</h2>
               <form className="flex flex-col gap-4" onSubmit={handleSignup}>
                  <div className="flex flex-col">
                     <label className="text-sm font-medium text-gray-700">Username</label>
                     <input
                        type="text"
                        placeholder="Enter username"
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                     />
                  </div>
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
                     Sign Up
                  </button>
               </form>
            </div>

            {/* Login Form */}
            <div className="bg-white rounded-xl p-8 shadow-md">
               <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">Welcome Back</h2>
               <form className="flex flex-col gap-4">
                  <div className="flex flex-col">
                     <label className="text-sm font-medium text-gray-700">Email</label>
                     <input
                        type="email"
                        placeholder="Enter email"
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                     />
                  </div>
                  <div className="flex flex-col">
                     <label className="text-sm font-medium text-gray-700">Password</label>
                     <input
                        type="password"
                        placeholder="Enter password"
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                     />
                  </div>
                  <button
                     type="submit"
                     className="mt-4 bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition duration-300"
                  >
                     Login
                  </button>
               </form>
            </div>

         </div>
      </div>
   );
}

export default Auth;
