const PhotoModel = require("../../models/photo");
const MedicalModel = require("../../models/medical")
const PatientModel = require("../../models/patient")

/**
 * POST api/auth/login
 *
 * @param req { id: String, password: String, type: String }
 * @param res Send "{ name: String, _id: String"} if success login, 
 *            or send 401 if fail login, otherwise send 500
 */

exports.login = async (req, res)=>
{
    let userType = MedicalModel;

    if(req.body.type == "p")
        userType = PatientModel;

    // Create test user
    await createTestUser(req.body.type, userType);
    console.log(req.body.type)
    
    try
    {
        // Check id is in DB, otherwise send 401
        const user = await userType.findByloginid(req.body.id);

        if(!user)
        {
            res.send(401);
            return;
        }

        // Send user object excluding password if password is correct, otherwise send 401
        if(user.checkUser(req.body.password))
        {
            let medical = await user.serialize();
            console.log(medical)
            res.send(medical);
            return;
        }

        res.send(401);
    }
    catch(err)
    {
        console.log(err)
        res.send(500);
    }
}


/**
 * GET api/auth/user
 *
 * @param res Send "{ pList: Array }" if success getting user, otherwise send 500
 */
exports.getAllUser = async (req, res)=>
{
    await createTestUser("p", PatientModel);
    try
    {
        let pList = await PatientModel.find({})
        res.send(pList);
    }
    catch(err)
    {
        console.log(err)
        res.send(500);
    }
}

/**
 * GET api/auth/user
 *
 * @param req "{ pname: String }"
 * @param res Send "{ pid: String(_id) }" if success getting user, otherwise send 500
 */
exports.getUser = async (req, res)=>
{
    await createTestUser("p", PatientModel);
    try
    {
        let patient = await PatientModel.findByUserName(req.body.pname)
        res.send(patient._id);
    }
    catch(err)
    {
        console.log(err)
        res.send(500);
    }
}


// Test medical user object
let testMUser = new MedicalModel({
    "mname" : "testname",
    "mloginid" : "testid",
    "mpassword" : "testpw",
})

// Test user object
let testPUser = new PatientModel({
    "pname" : "testname",
    "ploginid" : "testid",
    "ppassword" : "testpw",
})


// Create test user for developing
let createTestUser = async (utype, userType) =>
{
    let test = testMUser
    let user = await userType.findByloginid("testid")
    if(!user)
    {
        if (utype == "p")
            test = testPUser

        test.save(function (err)
        {
            if(err)
            {
                console.log("Error");
                return;
            }
            console.log("Success");
        })
    }
}
