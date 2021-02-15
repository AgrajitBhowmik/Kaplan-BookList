let booklists = [];
let isAdded = false;

export function getBooklists() {
  return booklists;
}

export function addBooklists(val) {
  booklists = [...val];
}

export function addtoBooklists(val) {
  booklists = [val, ...booklists];
  isAdded = true;
}

export function bookAdded() {
  return isAdded;
}

export function setIsBookAdded() {
  isAdded = false;
}
