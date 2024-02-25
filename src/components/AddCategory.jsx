import { useState } from 'react';

const AddCategory = ({ onSetCategories }) => {
  const [inputValue, setInpuValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newInputValue = inputValue.trim();

    if (newInputValue.length < 1) return;

    onSetCategories(newInputValue);

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
