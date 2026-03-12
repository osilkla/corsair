import React, { useState, useEffect } from 'react';
import { useRudderMock } from './hooks/useRudderMock';
import useFilters from './hooks/useFilters';
import Filters from './components/Filters/Filters';
import Table from './components/Table/Table';
import LoadMore from './components/LoadMore/LoadMore';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';

function App() {
  // Get events flux
  const { events, setEvents } = useRudderMock(true);

  const [displayedEvents, setDisplayedEvents] = useState([]);
  const [buffer, setBuffer] = useState([]);

  // Get new incoming events
  useEffect(() => {
    if (events.length === 0) return;

    // Identify events that are neither displayed nor already in the buffer
    // Compare by timestamp + eventName (or an ID if available)
    const newEvents = events.filter(
      (e) =>
        !displayedEvents.some((de) => de.timestamp === e.timestamp) &&
        !buffer.some((be) => be.timestamp === e.timestamp),
    );

    if (newEvents.length > 0) {
      setBuffer((prev) => [...newEvents, ...prev]);
    }
  }, [events]);

  // Push Buffer to DisplayedEvents
  const releaseBuffer = () => {
    setDisplayedEvents((prev) => [...buffer, ...prev].slice(0, 1000));
    setBuffer([]);
  };

  const filterTools = useFilters(displayedEvents);
  const { filteredEvents } = filterTools;

  const handleClear = () => {
    setEvents([]);
    setDisplayedEvents([]);
    setBuffer([]);
  };

  return (
    <div className='p-6 font-sans bg-gray-50 min-h-screen'>
      <Hero />
      <Filters filterTools={filterTools} setEvents={handleClear} />
      <Stats filteredEvents={filteredEvents} />
      <LoadMore buffer={buffer} releaseBuffer={releaseBuffer} />
      <Table events={filteredEvents} />
    </div>
  );
}

export default App;
