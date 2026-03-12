const adapters = ({ data }) => {
  if (data.length === 0) {
    return [];
  }

  const mappedData = [];

  for (let i = 0; i < data.length; i++) {
    mappedData.push({
      timestamp: data[i].sentAt,
      device: data[i].context.device.type,
      accountId: data[i].userId,
      eventName: data[i].event,
      type: data[i].properties.rv_type,
      properties: data[i].properties,
    });
  }

  return mappedData;
};

export default adapters;
