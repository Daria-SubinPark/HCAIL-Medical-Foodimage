import axios from 'axios';
const client = axios.create();

export const loginUser=(mid, mpassword)=>
{
    return new Promise(function(resolve, reject)
    {
        client.post('/auth/login', {id: mid, password: mpassword, type: 'm'})
        .then((response)=>
        {
            console.log(response)
            resolve(response.data);
        })
        .catch((err) => {console.log(err)})
    })
}


export const getAllUser=()=>
{
    return new Promise(function(resolve, reject)
    {
        client.get('/auth/user')
        .then((response)=>
        {
            resolve(response.data);
        })
        .catch((err) => {console.log(err)})
    })
}

export const getUser=(pname)=>
{
    return new Promise(function(resolve, reject)
    {
        client.post('/auth/user', {pname: pname})
        .then((response)=>
        {
            resolve(response.data);
        })
        .catch((err) => {console.log(err)})
    })
}