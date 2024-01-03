export function saveToLocalStorage(key, data) {
    console.log('saveToLocalStorage called');
    //
    localStorage.setItem(key, JSON.stringify(data));
}

export function getFromLocalStorage(key) {
    console.log('getFromLocalStorage called');
    //
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

export function removeFromLocalStorage(key) {
    console.log('removeFromLocalStorage called');
    //
    localStorage.removeItem(key);
}

