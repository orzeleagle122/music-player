import axios from 'axios';

export const getSearchedSongs = async (phrase) => {
    return await axios.get('https://deezerdevs-deezer.p.rapidapi.com/search', {
        params: {
            q: phrase,
        },
        headers: {
            'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
            'x-rapidapi-key':
                'c0b70ff419mshf6abc2a144dfa76p19dbe1jsn4a93647205b3',
        },
    });
};
