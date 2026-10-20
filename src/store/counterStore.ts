import { create } from 'zustand';

type storeProps = {
    count: number;
    onIncrement: () => void;
    onDecrement: () => void;
};

export const useCounterStore = create<storeProps>( ( set )  => ( {
    count: 0,
    onIncrement: () => set( () => ( { count: 1 } ) ),
    onDecrement: () => set( () => ( { count: -1 } ) ),
} ));