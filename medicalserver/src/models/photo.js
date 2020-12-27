const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
    filename: String,
    date : Object,
    latitude : String,
    longitude: String,
    img : String,
    pcomment : String,
    mcomment : String,
    mid : String,
    pid : String,
})

PhotoSchema.statics.findByDate = function (start, end)
{
    return this.findOne({ date: { $gt: start, $lt: end } } );
}

PhotoSchema.statics.findByPid = function (pid)
{
    return this.findOne({pid});
}

PhotoSchema.static.findPhoto = function (pid, start, end)
{
    return this.findOne({ pid: pid, date: { $gt: start, $lt: end } } );
}

PhotoSchema.methods.getFileName = function ()
{
    return this.filename;
}

PhotoSchema.statics.findById = function (_id)
{
    return this.findOne({_id});
}

const PhotoModel = mongoose.model("Photomodel", PhotoSchema)
module.exports = PhotoModel


