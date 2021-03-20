export interface Action {
    type: string;
    payload: number;
}

export interface RootState {
    count: number;
    reducer: any;
}

export interface CounterProps {
    count: number;
    onAdd: () => void;
    onMinus: () => void;
  }