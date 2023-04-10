export type ValueOf<T extends object> = T[keyof T];

export type KeyOf<T extends object> = keyof T;

export type ObjectKeys<T extends object> = (keyof T)[];

export type ObjectValues<T extends object> = ValueOf<T>[];

export type ObjectEntries<T extends object> = ObjectValues<{ [K in keyof T]: [K, T[K]] }>;
