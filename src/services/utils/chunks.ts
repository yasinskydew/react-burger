export const getChunks = (array: any[], size: number) => {
  const chunks = [];
  if (!Array.isArray(array) || typeof size !== 'number' || size <= 0) {
    return array;
  }
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

export const groupByKey = <T extends Record<string, any>>(array: T[], key: string): Record<string, T[]> => {
  if (!Array.isArray(array) || typeof key !== 'string' || !key) {
    return {};
  }

  return array.reduce((result: Record<string, T[]>, item: T) => {
    const groupKey = item[key];
    if (groupKey === undefined) {
      return result;
    }
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {});

}