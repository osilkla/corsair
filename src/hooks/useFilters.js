import { useMemo, useState } from 'react';

const useFilters = (events) => {
  const [filterDevice, setFilterDevice] = useState('All');
  const [searchAccount, setSearchAccount] = useState('');
  const [searchEvent, setSearchEvent] = useState('');
  const [filterType, setFilterType] = useState('');
  const resetFilters = () => {
    setFilterDevice('All');
    setSearchAccount('');
    setSearchEvent('');
    setFilterType('');
  };

  const filteredEvents = useMemo(() => {
    return events.filter((ev) => {
      const matchDevice = filterDevice === 'All' || ev.device === filterDevice;
      const matchAccount = ev.accountId.includes(searchAccount);
      const matchEvent = ev.eventName.toLowerCase().includes(searchEvent.toLowerCase());
      const matchType = ev.type.toLowerCase().includes(filterType.toLowerCase());
      return matchDevice && matchAccount && matchEvent && matchType;
    });
  }, [events, filterDevice, searchAccount, searchEvent, filterType]);

  return {
    filteredEvents,
    filterDevice,
    setFilterDevice,
    searchAccount,
    setSearchAccount,
    searchEvent,
    setSearchEvent,
    filterType,
    setFilterType,
    resetFilters,
  };
};
export default useFilters;
