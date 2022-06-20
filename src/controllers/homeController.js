
import db from "../models/index"

const getHomePage = async(req, res) =>{
    try{
        const data = await db.User.findAll()
        return res.render('homepage.ejs',{
            data: JSON.stringify(data)
        })
    } catch (e) {
        console.log(e)
    }

}
const getAbout = (req, res) => {
    return res.render('about/about.ejs')
}

module.exports = {
    getHomePage : getHomePage,
    getAbout : getAbout,
}