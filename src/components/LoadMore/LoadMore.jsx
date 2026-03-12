const LoadMore = ({ buffer, releaseBuffer }) => {
  if (buffer.length === 0) {
    return null;
  }
  return (
    <div className='fixed bottom-10 left-1/2 -translate-x-1/2 z-50 animate-bounce'>
      <button
        onClick={releaseBuffer}
        className='bg-gradient-to-r from-purple-400 to-pink-600 text-white px-6 py-2 rounded-full shadow-2xl     flex items-center gap-2'
      >
        <span className='relative flex h-3 w-3'>
          <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75'></span>
          <span className='relative inline-flex rounded-full h-3 w-3 bg-white'></span>
        </span>
        Voir {buffer.length} nouveaux événements
      </button>
    </div>
  );
};
export default LoadMore;
