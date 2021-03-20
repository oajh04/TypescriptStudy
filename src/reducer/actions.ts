import { PLUS, MINUS, CUSTOM, ZERO} from './actionTypes';

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

export function CustomAction(diff: number) {
    return {
        type: CUSTOM,
        payload: diff,
    }
}

export function ZeroAction(){
    return {
        type: ZERO,
    }
}