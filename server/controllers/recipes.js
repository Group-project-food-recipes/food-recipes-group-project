const axios = require("axios")


module.exports = {
    search: function(req,res,next){
        let ownedIngr = req.query.search.split(",")
        let regexIngr = ""

        if(ownedIngr.length === 1){
            regexIngr += `(${ownedIngr[0]})`
        }else{

            for(let i = 0; i < ownedIngr.length; i++){
                if(i == 0){
                    regexIngr += `(${ownedIngr[i]}|`
                } else if(i === ownedIngr.length-1){
                    regexIngr += `${ownedIngr[i]})`
                } else{
                    regexIngr += `${ownedIngr[i]}|`
                }
            }
        }

        console.log(regexIngr)
        axios({
            method:'get',
            url:`https://api.edamam.com/search?q=${req.query.search}&app_id=${process.env.applicationId}&app_key=${process.env.applicationKey} `
          })
            .then((response) => {
                let recipe = []
                // console.log(response.data.hits[0])
                // res.json(response.data.hits[0])

                response.data.hits.forEach(element => {
                    
                    let temp = {
                        title: element.recipe.label,
                        availIngred: [],
                        unavailIngred: [],
                        imageUrl: element.recipe.image,
                        calories: element.recipe.calories,
                        url: element.recipe.url,
                        dietTags: element.recipe.dietLabels,
                        healthTags: element.recipe.healthLabels,
                        totalTime: element.recipe.totalTime,
                        nutrients: element.recipe.digest
                    }
                    element.recipe.ingredientLines.forEach(ingredient =>{
                        let searchQuery = new RegExp(regexIngr, "gi")
                        if(ingredient.match(searchQuery)){
                            temp.availIngred.push(ingredient)
                        }else{
                            temp.unavailIngred.push(ingredient)
                        }
                    })
                    recipe.push(temp)
                });
                // sorting by least ammount of unavail Ingredients

                recipe.sort(function(a, b) {
                    return a.unavailIngred.length - b.unavailIngred.length 
                  });

                // console.log(recipe)

                  res.status(200).json(recipe)
            })
            .catch((err) =>{
                res.send(err)
            })
    }
}