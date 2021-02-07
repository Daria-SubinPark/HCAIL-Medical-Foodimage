import axios from 'axios';
const client = axios.create();

export const getPhotoList = (start, end, pid) =>
{
    return new Promise(function(resolve, reject)
    {
        client.post('/photo/find', {start, end, pid})
            .then((response)=>
            {
                console.log(response)
                resolve(response.data)
            })
            .catch((err) => {console.log(err)})
    })
}