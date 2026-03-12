import { useState } from 'react';
import Badge from '../Badge/Badge';

const EventRow = ({ event }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getTypeStyles = (type) => {
    switch (type?.toLowerCase()) {
      case 'screen':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'action':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };
  const getHoverStyles = (type) => {
    switch (type?.toLowerCase()) {
      case 'screen':
        return 'hover:bg-blue-50/75';
      case 'action':
        return 'hover:bg-orange-50/75';
      default:
        return 'hover:bg-gray-50/75';
    }
  };
  const hasProperties = event.properties && Object.keys(event.properties).length > 0;

  return (
    <>
      <tr className={`border-b border-gray-100 transition-colors ${getHoverStyles(event.type)}`}>
        <td className='px-4 py-3 text-sm text-gray-500 font-mono'>{event.timestamp}</td>

        <td className='px-4 py-3'>
          <Badge type={event.device} text={event.device} />
        </td>

        <td className='px-4 py-3 text-sm font-medium text-gray-700'>
          {event.accountId || <span className='text-gray-300 italic'>none</span>}
        </td>

        <td className='px-4 py-3'>
          <div className='flex items-center '>
            <span className='text-sm font-semibold text-gray-900'>{event.eventName}</span>
          </div>
        </td>

        <td className='px-4 py-3'>
          <div className='flex items-center '>
            <span
              className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border ${getTypeStyles(event.type)}`}
            >
              {event.type || event.properties.rv_type || 'system'}
            </span>
          </div>
        </td>

        <td className='px-4 py-3 text-right'>
          {hasProperties && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-indigo-600 hover:text-indigo-900 text-sm font-medium flex items-center justify-end w-full'
            >
              {isOpen ? 'Masquer' : 'Voir détails'}
              <span className={`ml-1 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
          )}
        </td>
      </tr>

      {isOpen && (
        <tr className='bg-gray-50'>
          <td colSpan='5' className='px-8 py-4'>
            <div className='bg-gray-900 rounded-lg p-4 shadow-inner'>
              <pre className='text-xs text-blue-300 overflow-auto max-h-60 leading-relaxed font-mono'>
                {JSON.stringify(event.properties, null, 2)}
              </pre>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default EventRow;
