import EventRow from '../../Events/EventRow/EventRow';
import EmptyState from '../EmptyState/EmptyState';

const TableBody = ({ filteredEvents }) => {
  return (
    <tbody>
      {filteredEvents.length > 0 ? (
        filteredEvents.map((event, index) => <EventRow key={event.timestamp + index} event={event} />)
      ) : (
        <EmptyState />
      )}
    </tbody>
  );
};
export default TableBody;
