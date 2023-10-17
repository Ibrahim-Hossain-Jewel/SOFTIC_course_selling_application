import { configureStore } from "@reduxjs/toolkit";
import courseReducer from './feature/buyCourse-slice';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

//Note here courseReducer is the course.reducer
export const store = configureStore({
    reducer: {
        courseReducer,
        
    },
});
//Now export the root state and dispatch data to the rootstate
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
// Now we can all of these. inside our component
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;