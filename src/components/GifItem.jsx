const GifItem = ({ url, title }) => {
  return (
    <div className='card'>
      <img src={url} atl={title} />
      <h4>{title}</h4>
    </div>
  );
};

export default GifItem;
