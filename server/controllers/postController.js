const myModel = require('../models/PostModel')

const getPosts = async(req, res) => {
    const data = await myModel.find()
    res.json(data)
}

const insertPost = (req, res) => {
    const data = req.body
    const saveData = new myModel(data);

    saveData
        .save()
        .then((result) => {
            console.log("insert successfully...", result);
        })
        .catch((err) => {
            console.log("error in insert...", err);
        });
    res.send(saveData)
}

const getSinglePost = async(req, res) => {
    const { id } = req.params
    console.log(id);

    const data = await myModel.find({ _id: id });
    console.log(data);
    res.status(200).send(data)
}


const updateSinglePost = async(req, res) => {
    const _id = req.params.id
    console.log(`id`, _id);
    const updated_data = await myModel.updateOne({ _id }, req.body);

    res.send(updated_data)
        // res.send('you are on right path')

}




module.exports = { getPosts, insertPost, getSinglePost, updateSinglePost }