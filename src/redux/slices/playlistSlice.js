import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

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
        searchSongs: (state, action) => {
            return {...state, searchList: action.payload.data}
        },
        moreSongs: (state,action)=>{
            const more={...state.searchList, ...action.payload.data}
            return {...state, searchList: more}
        }
    }
})

export default playlistSlice.reducer;

export const {searchSongs,moreSongs} = playlistSlice.actions;
export const getAllPlaylist = state => state.music.playlist;
export const getSearchSong = state => state.music.searchList;

export const searchSongActions = (phrase) => async dispatch => {
    await axios.get('https://deezerdevs-deezer.p.rapidapi.com/search', {
        params: {
            q: phrase
        },
        headers: {
            'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
            'x-rapidapi-key': 'c0b70ff419mshf6abc2a144dfa76p19dbe1jsn4a93647205b3'
        }
    }).then(res => {
        const {data} = res;
        console.log(data);
        dispatch(searchSongs(data))
    }).catch(err => console.log(err));
}

export const moreSongActions = (phrase) => async dispatch => {
    await axios.get('https://api.deezer.com/search?q=eminem&redirect_uri=http%253A%252F%252Fguardian.mashape.com%252Fcallback&index=25', {
        params: {
            q: phrase
        },
        headers: {
            'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
            'x-rapidapi-key': 'c0b70ff419mshf6abc2a144dfa76p19dbe1jsn4a93647205b3'
        }
    }).then(res => {
        const {data} = res;
        console.log(data);
        dispatch(searchSongs(data))
    }).catch(err => console.log(err));
}


// var options = {
//     method: 'GET',
//     url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
//     params: {q: 'eminem'},
//     headers: {
//         'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
//         'x-rapidapi-key': 'c0b70ff419mshf6abc2a144dfa76p19dbe1jsn4a93647205b3'
//     }
// };
//
// await axios(options).then(res => console.log(res)).catch(err => console.log(err));


// clearTimeout(timeoutID);
// timeoutID = setTimeout("document.form1.submit();", 500);