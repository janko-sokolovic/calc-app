export class Key {
    colspan?: number;
    constructor(readonly value: string, readonly type: KeyType, colspan?: number) {
        this.value = value;
        this.type = type;
        if (colspan) { this.colspan = colspan; }
    }
}

export enum KeyType {
    NUMBER,
    OPERATION,
    DECIMAL_POINT,
    CLEAR
}
