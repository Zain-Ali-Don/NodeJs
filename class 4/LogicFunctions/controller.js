let Index = async function(req,res){
    res.send("Index Page");
    res.end()
}

let About = async function(req,res){
    res.send("About Page");
    res.end()
}

let Contact = async function(req,res){
    res.send("Contact Page");
    res.end()
}

module.exports = {Index,About,Contact}