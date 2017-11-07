import { Key, KeyType } from './key/key';

export const KEYS: Key[] = [
    { value: 'C', type: KeyType.CLEAR },
    { value: '+/-', type: KeyType.OPERATION },
    { value: '%', type: KeyType.OPERATION },
    { value: '÷', type: KeyType.OPERATION },
    { value: '7', type: KeyType.NUMBER },
    { value: '8', type: KeyType.NUMBER },
    { value: '9', type: KeyType.NUMBER },
    { value: 'x', type: KeyType.OPERATION },
    { value: '4', type: KeyType.NUMBER },
    { value: '5', type: KeyType.NUMBER },
    { value: '6', type: KeyType.NUMBER },
    { value: '-', type: KeyType.OPERATION },
    { value: '1', type: KeyType.NUMBER },
    { value: '2', type: KeyType.NUMBER },
    { value: '3', type: KeyType.NUMBER },
    { value: '+', type: KeyType.OPERATION },
    { value: '0', type: KeyType.NUMBER, colspan: 2 },
    { value: '.', type: KeyType.DECIMAL_POINT },
    { value: '=', type: KeyType.OPERATION }
];
