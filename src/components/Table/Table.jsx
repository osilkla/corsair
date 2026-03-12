import TableBody from './Body/Body';
import TableHeader from './Header/Header';

const Table = ({ events }) => (
  <div className='bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden overflow-x-auto'>
    <table className='w-full text-left border-collapse'>
      <TableHeader />
      <TableBody filteredEvents={events} />
    </table>
  </div>
);
export default Table;
