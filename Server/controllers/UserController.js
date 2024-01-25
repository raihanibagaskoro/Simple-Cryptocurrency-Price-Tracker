const {User} = require('../models')
const Helper = require('../helpers/helper')

class UserController {
    static async register(req, res, next){
        try {
            const {username, password} = req.body;
            const newUser = await User.create({
                username,
                password: Helper.hashPassword(password)
            })
            res.status(201).json({
                id: newUser.id,
                username: newUser.username
            })
        } catch (error) {
            next(error);
        }
    }

    static async login(req, res, next){
        try {
            const {username, password} = req.body;
            const user = await User.findOne({
                where: {
                    username
                }
            })
            if(!user){
                throw {name: "InvalidUsernamePassword"}
            } else {
                if(Helper.comparePassword(password, user.password)){
                    const access_token = Helper.generateToken({
                        id: user.id,
                        username: user.username
                    })
                    res.status(200).json({
                        access_token
                    })
                } else {
                    throw {name: "InvalidUsernamePassword"}
                }
            }
        } catch (error) {
            next(error);
        }
    }

}

module.exports = UserController