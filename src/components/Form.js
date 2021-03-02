import { useState } from 'react';

const Form = ({ data, setData }) => {
  const [formData, setFormData] = useState({ id: 0, title: '', text: '' });

  const formHandler = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    const oldForm = { ...formData };
    const updateForm = { ...oldForm, ...{ [inputName]: inputValue } };
    setFormData(updateForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title === '' || formData.text === '') {
      return;
    }
    formData.id = new Date().getTime();
    setData([...data, { ...formData }]);
    const newFormData = { ...formData, ...{ id: 0, title: '', text: '' } };
    setFormData(newFormData);
  };

  return (
    <form className="form" onSubmit={handleSubmit} method="post" action="#">
      <label htmlFor="title">Title</label>
      <input
        name="title"
        id="title"
        type="text"
        value={formData.title}
        onChange={formHandler}
      />
      <label htmlFor="content">Content</label>
      <textarea
        name="text"
        id="content"
        cols="8"
        rows="4"
        value={formData.text}
        onChange={formHandler}
      />
      <button id="button" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
