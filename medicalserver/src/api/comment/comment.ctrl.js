const PhotoModel = require("../../models/photo");

/**
 * POST api/medical/sendcomment
 *
 * @param req "{ fid: String(_id), mid: String(_id), mcomment: String, }"
 * @param res Send 200 if save comment in DB, otherwise send 500
 */
exports.sendComment = async (req,res)=>
{
    try
    {
        console.log("Add comment")
        // Get photo object if photo is in photo DB, otherwise res 500
        const photo = await PhotoModel.findById(req.body.photoid)

        // Set mcomment of photo object
        photo.mcomment = await req.body.mcomment;
        photo.mid = await req.body.mid;

        // Send 200 if photo successfully save object in DB, otherwise send 500
        data.save(function (err)
        {
            if(err)
            {
                console.log(">> Error");
                return;
            }
            console.log(">> Success");
            res.send(200);
        })
    }
    catch (err)
    {
        console.log(err)
        res.send(500);
    }
}
