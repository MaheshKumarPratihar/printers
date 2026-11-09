export function readCart(raw, products) {
  let rows;
  try { rows = JSON.parse(raw); } catch { return []; }
  if (!Array.isArray(rows)) return [];
  const ids = new Set(products.map(product => product.id));
  const seen = new Set();
  return rows.filter(row => {
    if (!row || !ids.has(row.id) || seen.has(row.id) || !Number.isInteger(row.quantity) || row.quantity < 1 || row.quantity > 99) return false;
    seen.add(row.id);
    return true;
  }).map(({ id, quantity }) => ({ id, quantity }));
}
export function changeQuantity(rows, id, delta, products) {
  if (!products.some(product => product.id === id) || !Number.isInteger(delta)) return rows;
  const current = rows.find(row => row.id === id);
  const quantity = Math.min(99, (current?.quantity || 0) + delta);
  if (quantity <= 0) return rows.filter(row => row.id !== id);
  return current ? rows.map(row => row.id === id ? { id, quantity } : row) : [...rows, { id, quantity }];
}
