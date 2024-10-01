import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    nickname: '',
    email: '',
    gender: '',
    age: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    if (!formData.nickname) {
      formErrors.nickname = 'Нік є обов\'язковим';
      valid = false;
    }

    if (!formData.email) {
      formErrors.email = 'Електронна адреса є обов\'язковою';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Неправильний формат електронної адреси';
      valid = false;
    }

    if (!formData.gender) {
      formErrors.gender = 'Оберіть стать';
      valid = false;
    }

    if (!formData.age) {
      formErrors.age = 'Вік є обов\'язковим';
      valid = false;
    } else if (isNaN(formData.age) || formData.age <= 0) {
      formErrors.age = 'Вік має бути числом більше 0';
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(`Нік: ${formData.nickname}\nЕлектронна адреса: ${formData.email}\nСтать: ${formData.gender}\nВік: ${formData.age}`);
      setFormData({ nickname: '', email: '', gender: '', age: '' });
    }
  };

  return (
    <div className="form-container">
      <h2>Реєстраційна форма</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Нік:</label>
          <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
          />
          {errors.nickname && <span className="error">{errors.nickname}</span>}
        </div>

        <div>
          <label>Електронна адреса:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div>
          <label>Стать:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Оберіть стать</option>
            <option value="Чоловіча">Чоловіча</option>
            <option value="Жіноча">Жіноча</option>
          </select>
          {errors.gender && <span className="error">{errors.gender}</span>}
        </div>

        <div>
          <label>Вік:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <span className="error">{errors.age}</span>}
        </div>

        <button type="submit">Відправити</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
