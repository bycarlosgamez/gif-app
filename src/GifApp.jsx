import { useState } from 'react';

export const GifApp = () => {
  const [categories, setCategories] = useState(['Category 0']);

  const onAddCategory = () => {
    setCategories((prevCat) => [...prevCat, `Category ${categories.length}`]);
  };

  return (
    <>
      <h1>Gif App</h1>
      <button onClick={onAddCategory}>Add Category</button>
      <ol>
        {categories.map((el, i) => {
          return <li key={i}>{el}</li>;
        })}
      </ol>
    </>
  );
};
