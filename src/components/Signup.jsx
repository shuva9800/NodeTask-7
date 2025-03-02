import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db, serverTimestamp, auth } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const { user } = await createUserWithEmailAndPassword(auth, email, password);

    const ipAddress = await fetch('https://api.ipify.org?format=json').then(res => res.json()).then(data => data.ip);

    // Store user details in Firestore
    const userRef = collection(db, 'users');
    await addDoc(userRef, {
      email,
      password,
      ipAddress,
      signupTime: serverTimestamp(),
    });

    navigate('/login');
  };

  return (
    <div>
      <form onSubmit={handleSignup}>
        <h2>Signup</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Signup</button>
      </form>
      <div>
        <span>Already Have an account </span>
        <span><Link to='/login'>Login</Link></span>
      </div>
    </div>
  );
};

export default Signup;
