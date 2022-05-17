import { configureStore } from '@reduxjs/toolkit'
import listsReducer from '../features/lists/listsSlice'

export const store = configureStore({
    reducer: {
        lists: listsReducer
    }
})