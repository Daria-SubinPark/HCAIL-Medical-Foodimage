const PhotoModel = require("../../models/photo");
const PatientModel = require("../../models/patient");
const moment = require("moment")

// Todo 주어진 날짜에 특정한 사람이 찍은 사진 리스트 만드는

// 사진 날짜로 검색해서 이름 리스트 반환
exports.findPhotoByDate = (req, res)=>
{
    try {
        console.log(typeof (req.body.enddate))
        findByDateInDB(req.body.startdate, req.body.enddate)
            .then((list) => {
                console.log("size:" + list.length)
                if(list)
                    res.send(list)
                else
                    res.send(403)
            })
    } catch (err) {
        console.log(err)
        res.send(500);
    }
}

// 사진 이름으로 검색
exports.findPhotoByName = async (req, res)=>
{
    try
    {
        const photoList = await PhotoModel.findByfilename(req.body.name)
        console.log(photoList)
        res.send(photoList)
    }
    catch(err)
    {
        console.log(err)
        res.send(500);
    }
}

// 특정한 사람이 특정한 날짜에 찍은 사진 반환
exports.findPhotoByDateForUser = async (req, res) =>
{
    try
    {
        findByDateforUserInDB(req.body.pid, req.body.startdate, req.body.enddate) // Todo 수정
            .then((list) => {
                console.log("size:" + list.length)
                if(list)
                    res.send(list)
                else
                    res.send(403)
            })
    }
    catch(err)
    {
        console.log(err)
        res.send(400);
    }
}

// 특정한 사람이 찍은 사진 전부 반환
exports.findPhotoByUser = (req,res) =>
{
    try {
        console.log(typeof (req.body.pid))
        findByUser(req.body.pid)
            .then((list) => {
                console.log("size:" + list.length)
                if(list)
                    res.send(list)
                else
                    res.send(403)
            })
    } catch (err) {
        console.log(err)
        res.send(500);
    }
}


// 주어진 날짜에 사진을 찍은 사람들 이름 리스트 반환
let findByDateInDB = async (start, end) =>
{
    start = moment(start)
    end = moment(end)
    console.log(typeof(end))
    try
    {
        const dateRange = await end.diff(start, 'days');
        console.log(dateRange)
        let pNameSet = []
        if(dateRange <= 0)
        {
            console.log("No date")
        }
        for(let step = 0; step > dateRange; step++)
        {
            try
            {
                let targetDate = await start.setDate(start.getDate() + 1)
                let photo = await PhotoModel.findBydate(targetDate);
                let pname = await PatientModel.findById(photo.pname)
                pNameSet.push({filename:photo._id, pname: pname});
            }
            catch (e)   {console.log(e)}
        }
        return pNameSet
    }
    catch(err)
    {
        console.log(err)
    }
}

let findByDateforUserInDB = async (pid, start, end) =>
{
    try
    {
        let photoSet = []
        const dateRange = await end.diff(start, 'days');
        let result = []
        let i = 0;

        if(dateRange <= 0)
        {
            photoSet = await PhotoModel.findByUserId(pid)
            console.log(dateRange)
            console.log("No date")
        }
        for(let step = 0; step > dateRange; step++, i++)
        {
            try
            {
                let targetDate = await start.setDate(start.getDate() + 1)
                if(photoSet[i].date == targetDate)
                    result.push(photoSet[i])
            }
            catch (e)   {console.log(e)}
        }
        return result

    }
    catch(err)
    {
        console.log(err)
    }
}


let findByUser = async (pid) =>
{
    try
    {
        let photoSet = []
        photoSet = await PhotoModel.findByUserId(pid)

        return photoSet
    }
    catch(err)
    {
        console.log(err)
    }
}


