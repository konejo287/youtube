import axios from 'axios';

const KEY = 'AIzaSyA53twdnZvZMykF46f49T4fmt8BrSqXfIo';

export default axios.create(
    {
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: {
            part: 'snippet',
            maxResults: 5,
            type: 'video',
            key: KEY
        }
    }
);

//`${KEY}`