import EventRow from '../../Events/EventRow/EventRow';
import EmptyState from '../EmptyState/EmptyState';

const TableBody = ({ filteredEvents }) => {
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <tbody>
        <EmptyState />
      </tbody>
    );
  }
  return (
    <tbody>
      {filteredEvents.map((event, index) => (
        <EventRow key={event.timestamp + index} event={event} />
      ))}
    </tbody>
  );
};
export default TableBody;
