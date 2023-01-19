const Step = require("../Models/stepsModel");

const createSteps = async(req,res)=>{
    const {id} = req.body;
    try {
        const steps = await Step.create({...req.body,id});
        steps.save()
        return res.status(200).send(steps)
    } catch (error) {
        res.status(500).send(error.message)
    }
};

const getData = async(req,res)=>{
     const {id} = req.body;
    //console.log(req);
    try {
        const data = await Step.find({id}).populate(["creator_id","recipe_id","ingredient_id"]);
        return res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error.message)
    }
};

const getDetails = async(req,res)=>{
    let id = req.params.id;
    //console.log(req);
    try {
        const data = await Step.find({_id:id}).populate(["creator_id","recipe_id","ingredient_id"]);
        return res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error.message)
    }
};

module.exports = {createSteps,getData,getDetails}