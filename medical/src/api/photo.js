import axios from 'axios';
const client = axios.create();

export const searchPhotoByName=(imgname)=>
{
    client.post('/photo/name', {name: imgname})
        .then((response)=>
        {
            console.log(response)
            return response.data
        })
        .catch((err) => {console.log(err)})
}

export const searchPhotoByDate=(startdate, enddate)=>
{
    client.post('/photo/date', {startdate: startdate, enddate: enddate})
        .then(function(response)
        {
            console.log(response)
            return response.data
        })
        .catch(error => {console.log('error : ', error.response)})

}

export const searchPhotoByDateinUser = (pid, startdate, enddate) =>
{
    client.post('/photo/dateforpatient', {pid: pid, startdate: startdate, enddate: enddate})
        .then(function (response)
        {
            console.log(response)
            return response.data
        })
        .catch(error => {
            console.log('error : ', error.response)
        })
}

export const searchPhotoByUser = (pid) =>
{
    client.post('/photo/photo', {pid: pid})
        .then(function (response)
        {
            console.log(response)
            return response.data
        })
        .catch(error => {
            console.log('error : ', error.response)
        })
}


export const sendComment=(photoid, mid, mcomment)=>
{
    client.post('/medical/sendcomment', {photoid : photoid, mid : mid, mcomment: mcomment})
        .then((response)=>
        {
            console.log("GOOD")
        })
        .catch((err)=>{console.log(err)})
}


