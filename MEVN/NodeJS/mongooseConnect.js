const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/socialApp";

const userSchema = new mongoose.Schema(
    {
        _id: Number,
        username: String,
        email: String,
    },
    { _id: false}
);
const User = new mongoose.model("users",userSchema);
async function run() {
    try{
        await mongoose.connect(url);
        const user = User({ name: "Anuradha", email: "abc123@gmail.com", _id: 1});
        await user.save();
        const docs = await User.find({});
        docs.forEach((docs) => console.log(docs));
    } catch (error) {
        console.error(error);
    }  finally {
        await mongoose.disconnect();
    }
}
run();