import { create } from 'zustand';

type storeProps = {
    count: number;
    onIncrement: () => void;
    onDecrement: () => void;
};

export const useCounterStore = create<storeProps>( ( set )  => ( {
    count: 0,
    onIncrement: () => set( (state) => ( { count:  state.count + 1} ) ),
    onDecrement: () => set( (state) => ( { count:  state.count - 1} ) ),
} ));