import { PLUS, MINUS } from './actionTypes';

export function PlusAction() {
    return {
      type: PLUS,
    };
}

export function MinusAction() {
    return {
        type: MINUS,
    }
}