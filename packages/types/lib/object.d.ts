export type ValueOf<T extends object> = T[keyof T];

export type KeyOf<T extends object> = keyof T;
