export class Key {

    /**
     * Defines how many columns a key occupies.
     * Currently used only for "0", but can be reused
     * @default 1
     */
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
    CLEAR,
    YIELD, // equals
    INVERT
}
