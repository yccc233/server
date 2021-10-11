const router = require("express").Router();
const postParse = require('../utils')().postParse;
const fs = require('fs');

const filePath = "./server/datas/data.json";

router.post("/writeFile", function (req, res) {
    req.on('data', query => {
        let params = postParse(query.toString());
        fs.appendFile(filePath, JSON.stringify(params.user) + "\n", err => {
            if (err) {
                res.end(JSON.stringify({
                    code: 1,
                    message: err.message,
                    data: ""
                }))
            } else {
                res.end(JSON.stringify({
                    code: 0,
                    message: "success",
                    data: ""
                }))
            }
        })
    })
});



module.exports = router;