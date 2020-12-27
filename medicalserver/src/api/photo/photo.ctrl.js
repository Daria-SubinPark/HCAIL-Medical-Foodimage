const PhotoModel = require("../../models/photo");

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
        let photoList = [];
        
        if(start == 0 || end == 0) // using pid
            photoList = await PhotoModel.findByPid(pid)
        else if(pid == null) // using date
            photoList = await PhotoModel.findByDate(start, end)
        else // user date and pid
            photoList = await PhotoModel.findPhoto(pid, start, end)
        
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
    await console.log(data.pid);
    // Make photo object
    let photo = await new PhotoModel(data);

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

