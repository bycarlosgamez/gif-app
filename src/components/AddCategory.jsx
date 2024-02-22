import { useState } from 'react';

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInpuValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length < 1) return;

    setCategories((prevCategories) => [...prevCategories, inputValue]);
    setInpuValue('');
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInpuValue(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Search category'
        aria-label='Search category'
        value={inputValue}
        onChange={handleInputChange}
      />
      <button>Search Category</button>
    </form>
  );
};

export default AddCategory;
