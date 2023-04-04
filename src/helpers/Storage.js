export default class Storage {
    static getItem(key) {
        return localStorage.getItem(key);
    }

    static setItem(key, item) {
        localStorage.setItem(key, item);
    }

    static pushItem(key, item) {
        const items = Storage.getItem(key);
        if (items === null)
            return Storage.setItem(key, [item]);

        if (!Array.isArray(items))
            return;

        Storage.setItem(key, [...items, item]);
    }
}