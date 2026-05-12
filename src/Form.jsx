import React, { useContext } from 'react';
import { FormContext } from './FormContext';

function Form() {
  const { formData, updateField, theme } = useContext(FormContext);

  const fields = [
    { name: 'name', label: 'Name' },
    { name: 'email', label: 'Email' },
    { name: 'phone', label: 'Phone Number' },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'confirmPassword', label: 'Confirm Password', type: 'password' },
    { name: 'address', label: 'Address' },
    { name: 'city', label: 'City' },
    { name: 'state', label: 'State' },
    { name: 'country', label: 'Country' },
    { name: 'zip', label: 'Zip Code' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");

  };
  

  
  return (
    <form className={`form ${theme}`} onSubmit={handleSubmit}>
      {fields.map(f => (
        <div key={f.name} className="form-group">
          <label>{f.label}</label>
          <input
            type={f.type || 'text'}
            value={formData[f.name]}
            onChange={e => updateField(f.name, e.target.value)}
          />
        </div>
      ))}
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
}

export default Form;

