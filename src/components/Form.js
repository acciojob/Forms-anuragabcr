import React from 'react';

const Form = () => {
  return (
    <form id="info-form">
      <label htmlFor="full_name">Full Name:</label>
      <input id="full_name" type="text" />

      <label htmlFor="email">Email:</label>
      <input id="email" type="email" />

      <label htmlFor="password">Password:</label>
      <input id="password" type="password" />

      <label htmlFor="password_confirmation">Confirm Password:</label>
      <input id="password_confirmation" type="password" />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;