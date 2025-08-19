export function saveToLocalStorage<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getFromLocalStorage<T>(key: string): T | null {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) as T : null;
}

export function updateLocalStorage<T>(key: string, value: Partial<T>): void {
  const existing = getFromLocalStorage<T>(key);
  if (existing) {
    const updated = { ...existing, ...value };
    saveToLocalStorage(key, updated);
  }
}

export function deleteFromLocalStorage(key: string): void {
  localStorage.removeItem(key);
}