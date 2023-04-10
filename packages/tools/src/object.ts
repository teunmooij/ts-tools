import { ObjectEntries, ObjectKeys, ObjectValues } from 'ts-powertypes';

export const objectKeys = <T extends object>(obj: T) => Object.keys(obj) as ObjectKeys<T>;

export const objectValues = <T extends object>(obj: T) => Object.values(obj) as ObjectValues<T>;

export const objectEntries = <T extends object>(obj: T) => Object.entries(obj) as ObjectEntries<T>;
