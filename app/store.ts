import {
  configureStore, 
  getDefaultMiddleware, 
  ThunkAction, 
  Action} from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import rootReducer from './reducer';

const isDev = process.env.NODE_ENV === 'development';
const makeStore = () => {
  const middleware = getDefaultMiddleware();
  const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: isDev,
  })
  return store;  
}

const wrapper = createWrapper(makeStore); 

type AppStore = ReturnType<typeof makeStore>;
type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppThunk<ReturnType = void> = ThunkAction<
 ReturnType,
 RootState,
 unknown,
 Action
>;

export default wrapper;