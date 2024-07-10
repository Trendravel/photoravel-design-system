const convertCSS = (property: string | number): string => {
  if (typeof property === 'string') return property;

  return `${property}px`;
};

export default convertCSS;
