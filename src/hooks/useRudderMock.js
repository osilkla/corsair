import { useState, useEffect } from 'react';
import adapters from '../adapters/adapter';

export const useRudderMock = (isActive = true) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      const batchSize = Math.floor(Math.random() * 5) + 1;
      const newBatch = Array.from({ length: batchSize }, () => {
        const isIOS = Math.random() > 0.5;
        const accountIds = ['1450', '425738', '9901', ''];
        const eventNames = ['identify', 'call button clicked', 'settings screen', 'application opened'];
        const rvTypes = ['action', 'screen', 'autres'];

        return {
          sentAt: new Date().toISOString(),
          context: {
            device: {
              type: isIOS ? 'iOS' : 'Android',
            },
          },
          userId: accountIds[Math.floor(Math.random() * accountIds.length)],
          event: eventNames[Math.floor(Math.random() * eventNames.length)],
          properties: {
            version: '5.13.2',
            from_background: Math.random() > 0.8,
            rv_type: rvTypes[Math.floor(Math.random() * rvTypes.length)],
            rv_callMode: 'video',
            rv_favoriteCount: Math.floor(Math.random() * 10),
          },
        };
      });

      const mappedBatch = adapters({ data: newBatch });

      setEvents((prev) => {
        const updated = [...mappedBatch, ...prev];
        // max to 1000 events
        return updated.slice(0, 1000);
      });
    }, 3000); // Send batch every 3 seconds

    return () => clearInterval(interval);
  }, [isActive]);

  return { events, setEvents };
};
