export function track(name: string, payload?: any) {
  const event = {
    name,
    payload,
    t: performance.now(),
  };
  
  // @ts-ignore
  if (!window.__events) {
    // @ts-ignore
    window.__events = [];
  }
  
  // @ts-ignore
  window.__events.push(event);
  console.info(`[TRACK] ${name}`, payload || '');
}

if (typeof document !== 'undefined') {
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'L') {
      // @ts-ignore
      console.table(window.__events || []);
    }
  });
}
