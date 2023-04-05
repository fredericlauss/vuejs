export default class Storage {
    static getItem(key) {
        const item = localStorage.getItem(key);
        return JSON.parse(item);
    }

    static setItem(key, item) {
        const stringItem = JSON.stringify(item);
        localStorage.setItem(key, stringItem);
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