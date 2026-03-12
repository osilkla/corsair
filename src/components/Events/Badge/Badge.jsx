import React from 'react';

const Badge = ({ type, text }) => {
  const getTypeStyles = (type) => {
    switch (type?.toUpperCase()) {
      case 'IOS':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'ANDROID':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };
  return (
    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border inline-block ${getTypeStyles(type)}`}>
      {text}
    </span>
  );
};
export default Badge;
