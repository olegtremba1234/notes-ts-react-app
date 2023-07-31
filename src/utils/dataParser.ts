const dateParser = (content: string): string[] => {
  // Implement date parsing logic here and return an array of dates
  // For simplicity, let's assume we extract dates in the format: 'DD/MM/YYYY'

  const regex = /(\d{1,2}\/\d{1,2}\/\d{4})/g;
  const matches = content.match(regex);

  return matches || [];
};

export default dateParser;
