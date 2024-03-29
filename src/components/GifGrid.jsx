import GifItem from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs.js';

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h2>Loading...</h2>}

      <div className='card-grid'>
        {images.map((image) => (
          <GifItem key={image.id} title={image.title} url={image.url} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
