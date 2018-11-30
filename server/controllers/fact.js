const axios = require('axios')

class Fact {
    static show(req, res) {
        let barcode = [
            737628010264,
            737628025602,
            737628064502,
            737628003006,
            737628005109,
            737628010257,
            737628010271,
            737628010530,
            737628011506,
            737628030002,
            737628066001,
            737628010233,
            737628010554,
            621683021252,
            621683920159,
            621683921156,
            621683021153,
            621683520151,
            621683921354
        ]
        let search = barcode[Math.floor(Math.random() * barcode.length)]
        axios({
            method: "get",
            url: `https://world.openfoodfacts.org/api/v0/product/${search}.json`
        })
            .then(function (response) {
                res.status(200).json(response.data)
            })
            .catch(function (error) {
                res.status(400).json(error.response);
            });
    }
}

module.exports = Fact