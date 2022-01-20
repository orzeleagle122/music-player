import {configureStore} from "@reduxjs/toolkit";
import music from '../redux/slices/playlistSlice';

export const store = configureStore({
    reducer: {
        music
    }
})