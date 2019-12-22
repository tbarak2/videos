import axios from 'axios';

const KEY = 'AIzaSyDklx5i4EFfktDtoLE1dpTh3Ih_QIMYRpQ';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        type:'video',
        key:`${KEY}`
    }
})