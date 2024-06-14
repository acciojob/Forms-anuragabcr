import React, { useState } from 'react';

const FormState = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Accessing the current value of the inputs
    console.log(fullName);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);

    // Clearing the form inputs
    setFullName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <form id="info-form" onSubmit={handleSubmit}>
      <label htmlFor="full_name">Full Name:</label>
      <input id="full_name" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />

      <label htmlFor="email">Email:</label>
      <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label htmlFor="password">Password:</label>
      <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <label htmlFor="password_confirmation">Confirm Password:</label>
      <input id="password_confirmation" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormState;