import express from "express";
import partiesSchema from "../models/parties.js";

const router = express.Router();

// creates a party from the info given
router.post("/makeParty", async (req, res) => {
    console.log(req.body.characters.length);
    if(req.body.characters.length == 0) return res.status(409).json("Party cannot be empty"); 
    
    const party = new partiesSchema(req.body)
    party.save();

    return res.status(200).json("Party was made");    
});

router.post("/getAllParties" , async (req,res) => {
    // does a search for any party with x user in it
    let AllPartiesWithUser = [];
    partiesSchema.find({'characters.user': {$regex: req.body.user, $options: "i"}}, (err,result) => {
        if(err) console.log(err);

        result.map(item => {
            AllPartiesWithUser.push({
                partyName: item.partyName,
                characters: item.characters
            })
        })
        return res.status(200).json(AllPartiesWithUser);
    });

}) 

export default router;
