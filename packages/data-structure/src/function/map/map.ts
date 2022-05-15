export type Map<K, V> = {
	add: (key: K, value: V) => void;
	get: (key: K) => V;
};

export function createMap<K extends string | number | symbol, V>(): Map<K, V> {
	const map: Record<K, V> = {} as Record<K, V>;
	return {
		add: (key, value) => (map[key] = value),
		get: (key) => map[key],
	};
}
