const mongoose  = require("mongoose");
async function Run(){
    await mongoose.connect("mongodb+srv://sfayazmr:Abcdef067@cluster01.ckihayr.mongodb.net/sample"
).then(()=>{console.log("connected");})
.catch((error)=>{console.log("error",error)})

const schema=mongoose.Schema({
    name: { type: String, minlength: 3, maxlength: 50 }, //min length, max length
        regno:{type:String,unique: true,required:true}, //required
    country_code:{type:Number,default:91}, //default
    phoneNumber: {type: String,match: /^[0-9]{10}$/}, //regrex
    age: { type: Number, min: 0, max: 120 }, //min max
    status: { type: String, enum: ['active', 'inactive', 'suspended'] }  // Only these values are allowed

});


const model=mongoose.model("modelname",schema);
//const dataupload=new model({name:"myname",regno:"21xdd"});

//await dataupload.save().then(()=>{console.log("sata saved")})
//.catch((error)=>{console.log("not saved",error);});

const foundDocument = await model.findOne({ name: 'myname' });
console.log(foundDocument);

await mongoose.disconnect().then(()=>{console.log("completed disconnection")})
.catch((error)=>{console.log("not discoounted");});

}
Run();