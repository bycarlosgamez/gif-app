import { useState } from 'react';
import AddCategory from './components/AddCategory';

export const GifApp = () => {
  const [categories, setCategories] = useState([]);

  const onSetCategories = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories((prevCategories) => [newCategory, ...prevCategories]);
  };

  return (
    <>
      <h1>Gif App</h1>

      <AddCategory onSetCategories={onSetCategories} />

      <ol>
        {categories.map((el, i) => {
          return <li key={i}>{el}</li>;
        })}
      </ol>
    </>
  );
};
