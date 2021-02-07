import axios from 'axios';
const client = axios.create();

const saveComment=(photoid, mid, mcomment)=>
{
    return new Promise(function(resolve, reject)
    {
        client.post('/comment', {photoid: photoid, mid: mid, mcomment: mcomment})
            .then((response)=>
            {
                resolve(response.data);
            })
            .catch((err) => {console.log(err)})
    })
}


export default saveComment;