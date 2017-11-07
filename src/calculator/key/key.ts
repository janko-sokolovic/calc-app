export class Key {
    value: string;
    type: KeyType;
    colspan?: number;
}

export enum KeyType {
    NUMBER,
    OPERATION,
    DECIMAL_POINT,
    CLEAR
}
