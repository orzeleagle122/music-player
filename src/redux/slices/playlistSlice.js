import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    playlist: [{
        name: "hip hop",
        songs: [
            {
                title: "Być nie mieć",
                author: "peja"
            }, {
                title: "Być nie mieć",
                author: "peja"
            }, {
                title: "Być nie mieć",
                author: "peja"
            },

        ]
    },
        {
            name: "Hity Dody elektrody",
            songs: [
                {
                    title: "Kiedyś jak nie dziś",
                    author: "Doda"
                }, {
                    title: "Vergin",
                    author: "Doda"
                }, {
                    title: "Biały Miś",
                    author: "Doda"
                },

            ]
        }],
    searchList: [],
}

export const playlistSlice = createSlice({
    name: "music",
    initialState,
    reducers: {
        firstAction: (state, action) => {
            return {...state}
        },
    }
})

export default playlistSlice.reducer;

export const {firstAction} = playlistSlice.actions;
export const getAllPlaylist = state => state.music.playlist;
