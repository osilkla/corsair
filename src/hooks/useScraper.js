import { useState, useEffect } from 'react';

export const useScraper = (url) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const htmlText = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, 'text/html');
        const rows = Array.from(doc.querySelectorAll('tr'));

        let scrapedEvents = [];
        let currentEvent = { properties: {} };

        rows.forEach((row) => {
          const th = row.querySelector('th')?.innerText?.trim();
          const td = row.querySelector('td')?.innerText?.trim();

          if (!th) return;

          // Detect new event start with ###
          if (th === '###') {
            if (currentEvent.eventName) {
              scrapedEvents.push(currentEvent);
            }
            currentEvent = { properties: {} }; // Reset for the next one
            return;
          }

          switch (th) {
            case 'Sent at':
              currentEvent.timestamp = td;
              break;
            case 'Device':
              currentEvent.device = td;
              break;
            case 'Account ID':
              currentEvent.accountId = td === 'none' ? '' : td;
              break;
            case 'Event':
              currentEvent.eventName = td;
              break;
            default:
              if (th !== '' && td !== undefined) {
                currentEvent.properties[th] = td;
                if (th === 'rv_type') {
                  currentEvent.type = td;
                }
              }
              break;
          }
        });

        if (currentEvent.eventName) scrapedEvents.push(currentEvent);

        setEvents(scrapedEvents);
      } catch (error) {
        console.error('Erreur de scrapping:', error);
      }
    };

    fetchData();
    // Refresh every 5 seconds
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, [url]);

  return { events, setEvents };
};
