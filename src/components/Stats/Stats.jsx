const Stats = ({ filteredEvents }) => {
  return (
    <div className='mb-2 text-sm text-gray-500'>
      Showing {filteredEvents.length} {filteredEvents.length > 1 ? 'events' : 'event'}
    </div>
  );
};

export default Stats;
