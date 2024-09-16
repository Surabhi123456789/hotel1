import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className="flex flex-col items-center py-12 px-4">
      <h2 className="text-3xl font-semibold mb-6">Login</h2>
      <form onSubmit={handleLogin} className="w-full max-w-md bg-gray-100 p-8 rounded-lg shadow-lg">
        <label className="block text-gray-700 mb-2">Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"/>
        
        <label className="block text-gray-700 mb-2">Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"/>
        
        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
