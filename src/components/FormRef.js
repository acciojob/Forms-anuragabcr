import React, { useRef } from 'react';

const FormRef = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPassRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Accessing the current value of the inputs
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
    console.log(confirmPassRef.current.value);

    // Clearing the form inputs
    nameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
    confirmPassRef.current.value = '';
  };

  return (
    <form id="info-form" onSubmit={handleSubmit}>
      <label htmlFor="full_name">Full Name:</label>
      <input id="full_name" type="text" ref={nameRef} />

      <label htmlFor="email">Email:</label>
      <input id="email" type="email" ref={emailRef} />

      <label htmlFor="password">Password:</label>
      <input id="password" type="password" ref={passwordRef} />

      <label htmlFor="password_confirmation">Confirm Password:</label>
      <input id="password_confirmation" type="password" ref={confirmPassRef} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormRef;