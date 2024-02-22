import { useState } from 'react';
import AddCategory from './components/AddCategory';

export const GifApp = () => {
  const [categories, setCategories] = useState(['Category 0']);

  console.log(categories);

  return (
    <>
      <h1>Gif App</h1>

      <AddCategory setCategories={setCategories} />

      <ol>
        {categories.map((el, i) => {
          return <li key={i}>{el}</li>;
        })}
      </ol>
    </>
  );
};
