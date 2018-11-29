const axios = require("axios")

module.exports = {
    search: function(req,res,next){
        axios({
            method:'get',
            url:'http://www.recipepuppy.com/api/?i=rice '
          })
            .then((response) => {
                console.log("masuk then")
                console.log(response)
              res.status(200).json(response.data)
            })
            .catch((err) =>{
                console.log("masuk catch")
                res.status(400).json({err: err.response})
            })
    }
}