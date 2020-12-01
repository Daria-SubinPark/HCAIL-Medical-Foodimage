import axios from 'axios';
const client = axios.create();

const searchPatientByName=(imgname)=>
{
    client.post('/patient/user', {name: imgname})
        .then((response)=>
        {
            console.log(response)
            return response.data
        })
        .catch((err) =>
        {
            console.log(err)
            return 500;
        })
}

export default searchPatientByName;