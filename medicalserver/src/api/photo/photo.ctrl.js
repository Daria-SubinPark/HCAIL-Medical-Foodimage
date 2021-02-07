const PhotoModel = require("../../models/photo");
let fs = require('fs');  

/**
 * POST api/photo/find
 *
 * @param req "{ start: Date, end: Date, pid: String }"
 * @param res Send "{ photoList: Array }" if success getting PhotoList, otherwise send 500
 */
exports.findPhoto = async (req, res) =>
{
    try
    {
        let start = req.body.start;
        let end = req.body.end;
        let pid = req.body.pid;
        let photoList = [];
        console.log(start, end, pid)
        
        if(pid == null) // using date
            photoList = await PhotoModel.findByDate(start, end)
        else // user date and pid
            photoList = await PhotoModel.findPhoto(pid, start, end)
        if(!photoList[0])
            photoList = [photoList]
        res.send(photoList)
    }
    catch(err)
    {
        console.log(err)
        res.send(500);
    }

}

/**
 * POST api/photo/save
 *
 * @param req   new photo
 * @param res   Send 200 if photo is successfully saved to DB, otherwise 500
 * 
 */
exports.savePhoto = async (req, res) =>
{
    try
    {
        await addPhotoToDB(req.body, ()=>console.log("Can't add photo to DB"))
        await res.send(200)
    }
    catch(err)
    {
        console.log(err)
        res.send(500);
    }
}


/**
 * Save new photo in photo DB.
 * {
 *     img : "photoStr",
 *     date : "date",
 *     longitude : "longitude",
 *     latitude : "latitude",
 * }
 */
let addPhotoToDB= async (data, callback)=>
{
    // Make photo object
    let photo = new PhotoModel(data);
    let filename = __dirname + "/../../../img/" + data.filename.toString().replace(' ', '_') + ".png"
    filename = await base64_decode(data.img, filename)
    photo.img = 'save'
    console.log(filename)
    
    // Save photo in photo DB
    await photo.save(function (err)
    {
        if(err)
        {
            callback(err, null);
            console.log("Error");
            return;
        }
        else
	    {
	        console.log("Success");
            callback(null, photo);
 	    }
  })
}

let base64_decode = (base64str, file) =>
{  
    console.log(typeof base64str)
    let bitmap = new Buffer(base64str, 'base64');  
    // 버퍼의 파일을 쓰기  
    fs.writeFileSync(file, bitmap);  
    return file;
}  