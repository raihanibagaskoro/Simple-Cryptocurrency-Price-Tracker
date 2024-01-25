const {User} = require('../models')
const Helper = require('../helpers/helper')

async function authentication(req, res, next){
    try {
        const {access_token} = req.headers;
        if(!access_token){
            throw {name: "AuthenticationFailed"}
        } else {
            const payload = Helper.verifyToken(access_token);
            const user = await User.findOne({
                where: {
                    id: payload.id
                }
            })
            if(!user){
                throw {name: "AuthenticationFailed"}
            } else {
                req.user = payload;
                next();
            }
        }
    } catch (error) {
        next(error);   
    }
}

module.exports = authentication;