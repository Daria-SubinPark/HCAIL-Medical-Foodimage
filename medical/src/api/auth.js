import axios from 'axios';
const client = axios.create();

const searchUserToLogin=(mid, mpassword)=>
{
    client.post('/medical/login', {id: mid, password: mpassword})
        .then((response)=>
        {
            console.log(response)
            return response.data
        })
        .catch((err) => {console.log(err)})
}

export default searchUserToLogin;