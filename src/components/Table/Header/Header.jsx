const TableHeader = () => (
  <thead className='bg-gray-50 border-b border-gray-200 dark:bg-gray-700 dark:border-gray-600'>
    <tr>
      <th className='px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider w-64'>
        Hour
      </th>
      <th className='px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider w-32'>
        Device
      </th>
      <th className='px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider w-32'>
        Account ID
      </th>
      <th className='px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider'>
        Event Name
      </th>
      <th className='px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider w-32'>
        Type
      </th>
      <th className='px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider text-right w-32'>
        Actions
      </th>
    </tr>
  </thead>
);

export default TableHeader;
