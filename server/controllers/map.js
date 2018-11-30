const axios = require('axios')

class Map {
    static show(req, res) {
        axios({
            method: "get",
            url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-6.2607187,106.7794275&radius=1500&type=supermarket&keyword=supermarket&key=AIzaSyAgA6aZLyWwO7JJSiP2bpbHgIvgNO4r0Mg'
        })
            .then(function (response) {
                res.status(200).json(response.data)
            })
            .catch(function (error) {
                res.status(400).json(error.response);
            });
    }
}

module.exports = Map