const Filters = ({ filterTools, setEvents }) => {
  const {
    filterDevice,
    setFilterDevice,
    searchAccount,
    setSearchAccount,
    searchEvent,
    setSearchEvent,
    filterType,
    setFilterType,
    resetFilters,
  } = filterTools;

  return (
    <div className='flex flex-col lg:flex-row gap-4 mb-6 mt-6 bg-white dark:bg-gray-800 p-4 rounded shadow-sm border'>
      <select
        className='border p-2 rounded cursor-pointer dark:border-gray-200 dark:text-gray-200'
        value={filterDevice}
        onChange={(e) => setFilterDevice(e.target.value)}
      >
        <option value='All'>All Devices</option>
        <option value='iOS'>iOS</option>
        <option value='Android'>Android</option>
      </select>
      <input
        type='text'
        placeholder='Search Account ID...'
        className='border p-2 rounded flex-1  dark:border-gray-200 dark:text-gray-200'
        value={searchAccount}
        onChange={(e) => setSearchAccount(e.target.value)}
      />
      <input
        type='text'
        placeholder='Filter Event Name...'
        className='border p-2 rounded flex-1  dark:border-gray-200 dark:text-gray-200'
        value={searchEvent}
        onChange={(e) => setSearchEvent(e.target.value)}
      />
      <select
        className='border p-2 rounded cursor-pointer dark:border-gray-200 dark:text-gray-200'
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
      >
        <option value='All Type'>All Type</option>
        <option value='Action'>Action</option>
        <option value='Screen'>Screen</option>
        <option value='System'>System</option>
      </select>

      <div className='flex gap-2 w-full md:w-auto'>
        <button
          onClick={resetFilters}
          className='flex-1 lg:flex-none bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 cursor-pointer dark:border-gray-200 dark:text-gray-200'
        >
          Reset
        </button>
        <button
          onClick={() => setEvents([])}
          className='flex-1 lg:flex-none bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer dark:border-gray-200 dark:text-gray-200'
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filters;
