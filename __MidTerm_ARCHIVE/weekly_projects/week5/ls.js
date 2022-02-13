export function readFromLS(key) {
    let value = localStorage.getItem(key);
    if(value === null) return 1
    else return JSON.parse(value);
}

export function writeToLS(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}



