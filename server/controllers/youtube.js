const axios = require("axios")

module.exports = {
    list: function(req, res) {
        let params = req.params.q
        console.log(params)
        axios({
            method:'get',
            url:`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${params}&key=AIzaSyAJO81eaEeJ0CqEPrsiKTGtNLJ8n5bPTj4`
        })
            .then((response) => {
              res.status(200).json(response.data)
            })
            .catch((err) =>{
                res.status(400).json({err: err.response})
            })
    },
    search: function(req, res) {
        let params = req.body.search
        params = params.split(' ').join('+')
        res.status(200).json({params})
    }
}