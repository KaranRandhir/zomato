import axios from 'axios';
 
export default axios.create({
    baseURL : 'https://developers.zomato.com/api/v2.1',
    headers : {
        'user-key' :  '7891440f28708919b1eb3ab09dd8ecd2'
    }
});

