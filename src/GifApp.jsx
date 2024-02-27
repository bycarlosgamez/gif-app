import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

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

      {categories.map((el, i) => (
        <GifGrid key={el + i} category={el} />
      ))}
    </>
  );
};
