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
      setError('EL nombre debe tener mínimo 5 caracteres');
      setSuccessMessage('');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Dirección de e-mail inválido');
      setSuccessMessage('');
    } else {
      setError('');
      setSuccessMessage(`Gracias ${formData.name}, nos contactaremos contigo vía e-mail.`);
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
        placeholder="Nombre"
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