import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.length < 5) {
      setError('Name must be at least 5 characters');
      setSuccessMessage('');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Invalid email address');
      setSuccessMessage('');
    } else {
      setError('');
      setSuccessMessage(`Thank you ${formData.name}, we will contact you via email.`);
      // Optionally clear the form fields
      setFormData({ name: '', email: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </form>
  );
};

export default Form;