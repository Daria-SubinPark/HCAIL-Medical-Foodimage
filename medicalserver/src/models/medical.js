const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const MedicalSchema = new Schema(
    {
        mname : String,
        mloginid : String,
        mpassword : String,
    }
)

MedicalSchema.statics.findByloginid = function (mloginid)
{
    return this.findOne({mloginid})
}

MedicalSchema.methods.checkUser = function (password)
{
    return this.mpassword === password;
}

MedicalSchema.methods.getName = function () {
    return this.mname;
}

MedicalSchema.methods.serialize = function () {
    const data = this.toJSON();
    delete data.mpassword;
    return data;
};
const MedicalModel = mongoose.model("Medicalmodel", MedicalSchema)
module.exports = MedicalModel
