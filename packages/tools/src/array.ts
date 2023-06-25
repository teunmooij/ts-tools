export const reduceAsync = async <T, U, V>(
  array: T[],
  mapper: (value: T, index: number, array: T[]) => Promise<U>,
  reducer: (previousValue: V, currentValue: U, originalValue: T, currentIndex: number, array: T[]) => V,
  initialValue: V,
): Promise<V> => {
  const mapped = await Promise.all(array.map(mapper));
  return mapped.reduce((acc, val, index) => reducer(acc, val, array[index], index, array), initialValue);
};
