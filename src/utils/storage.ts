interface IStorage {
	getItem(key: string): string | null;
	setItem(key: string, item: string): void;
	removeItem(key: string): void;
	clear(): void;
}

class StorageUtility implements IStorage {
	private storage: Storage;
	constructor() {
		this.storage = localStorage;
	}
	getItem(key: string) {
		return this.storage.getItem(key);
	}
	setItem(key: string, item: string) {
		this.storage.setItem(key, item);
	}
	removeItem(key: string) {
		this.storage.removeItem(key);
	}
	clear() {
		this.storage.clear();
	}
}

const storage = new StorageUtility();

export default storage;
