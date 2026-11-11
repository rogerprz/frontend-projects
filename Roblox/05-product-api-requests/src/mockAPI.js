// Local fixtures: B has failed reviews; C has empty lists. A is slower for stale-response checks.
function request(id, signal, value, fail = false) {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) return reject(new DOMException('Aborted', 'AbortError'));
    const abort = () => { clearTimeout(timer); reject(new DOMException('Aborted', 'AbortError')); };
    const timer = setTimeout(() => {
      signal?.removeEventListener('abort', abort);
      if (fail) reject(new Error('Mock request failed'));
      else resolve(value);
    }, id === 'A' ? 1500 : 350);
    signal?.addEventListener('abort', abort, { once: true });
  });
}
export const mockAPI = {
  getInfo: (id, { signal } = {}) => request(id, signal, { name: `Product ${id}`, description: 'Practice product fixture' }),
  getReviews: (id, { signal } = {}) => request(id, signal, id === 'C' ? [] : [{ id: 'review-1', text: 'Useful product' }], id === 'B'),
  getRelated: (id, { signal } = {}) => request(id, signal, id === 'C' ? [] : [{ id: 'related-1', name: 'Related product' }]),
};
