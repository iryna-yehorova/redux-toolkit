import { configureStore } from '@reduxjs/toolkit'
import listsSlice from '../features/lists/listsSlice'

export const store = configureStore({
    reducer: {
        lists: listsSlice
    }
})