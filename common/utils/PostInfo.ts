export const wordCountToTime = (words: number): string => {
  const time = Math.ceil(words / 225);
  const suffix = time === 1 ? 'minute' : 'minutes';
  return `${time} ${suffix}`;
};
