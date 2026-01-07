export function get(key) {
    return localStorage.getItem(key) === "true";
}

export function set(key, value) {
    localStorage.setItem(key, value);
}