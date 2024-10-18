export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw Error('Cannot process');
  const copy = map;
  for (const [d, l] of map.entries()) if (l === 1) copy.set(d, 100);
  return copy;
}
