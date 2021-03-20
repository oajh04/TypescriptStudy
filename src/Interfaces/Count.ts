export interface Action {
    type: String;
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