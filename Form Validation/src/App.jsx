import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [desc, setDesc] = useState('');
  const [nameErr, setNameError] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [desErr, setDesErr] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleName(e) {
    const value = e.target.value;
    setName(value);
    if (value.length < 3) {
      setNameError('Name cannot be less than three characters');
      return false;
    } else if (!value.match(/^[A-Za-z\s]+$/)) {
      setNameError('Please write your full name');
      return false;
    } else {
      setNameError('');
      return true;
    }
  }

  function handleEmail(e) {
    const value = e.target.value;
    setEmail(value);
    if (value.length === 0) {
      setEmailErr('Email is required');
      return false;
    } else if (!value.match(/^[A-Za-z]+[._\-\w]*@[A-Za-z]+\.[a-z]{2,4}$/)) {
      setEmailErr('Please write correct email');
      return false;
    } else {
      setEmailErr('');
      return true;
    }
  }

  function handleDesc(e) {
    const value = e.target.value;
    setDesc(value);
    if (value.length < 10) {
      setDesErr('Please add more details');
      return false;
    } else if (value.length > 30) {
      setDesErr('Limit exceeded!');
      return false;
    } else {
      setDesErr('');
      return true;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isNameValid = handleName({ target: { value: name } });
    const isEmailValid = handleEmail({ target: { value: email } });
    const isDescValid = handleDesc({ target: { value: desc } });

    if (isNameValid && isEmailValid && isDescValid) {
      // Submit the form data
      console.log('Form submitted successfully!');
      setSubmitted(true);
    } else {
      console.log('Form submission failed. Please check the input fields.');
      setSubmitted(false);
    }
  }

  return (
    <>
      <div className='w-screen h-screen flex items-center justify-around flex-col'>
        <form className='bg-cyan-500 p-5 rounded-md shadow-xl flex flex-col items-center justify-center' onSubmit={handleSubmit}>
          <h1 className='text-3xl font-semibold font-mono'>Feedback form</h1>
          <div className='grid grid-cols-1 gap-3'>
            <input className=' border-2 border-black rounded-lg w-96 p-2' type="text" placeholder='Enter your Name' onChange={handleName} />
            <p className='text-red-50'>{nameErr}</p>
            <input className='border-2 border-black rounded-lg w-96 p-2' type="text" placeholder='Enter your Email' onChange={handleEmail} />
            <p>{emailErr}</p>
            <textarea className='border rounded w-96 p-2' placeholder='Enter your Description' onChange={handleDesc}></textarea>
            <p>{desErr}</p>
          </div>
          <button type='submit' className='bg-blue-200 rounded px-4 py-2 mt-4'>Submit</button>
        </form>
        {submitted && (
          <div>
            <h1>Form Submitted Successfully!</h1>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Description: {desc}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
