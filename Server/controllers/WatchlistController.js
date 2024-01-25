const {Watchlist} = require('../models')

class WatchlistController {
    static async getWatchlist(req, res, next){
        try {
            const watchlist = await Watchlist.findAll({
                where: {
                    user_id: req.user.id
                }
            })
            res.status(200).json(watchlist)
        } catch (error) {
            next(error);
        }
    }

    static async addList(req, res, next){
        try {
            const {coin_name} = req.body;
            const user_id = req.user.id;
            const newList = await Watchlist.findOrCreate({
                where: { coin_name, user_id }
            })
            // if(newList[1] === false){
            //     const deleteExisting = await Watchlist.destroy({
            //         where: { coin_name, user_id }
            //     })
            //     if(deleteExisting){
            //         res.status(201).json({message: "Watchlist deleted successfully"})
            //     } else {
            //         throw {name: "DeleteFailed"}
            //     }
            // }
            res.status(201).json(newList)
        } catch (error) {
            next(error)
        }
    }

    static async deleteList(req, res, next){
        try {
            const id = req.params.id;
            await Watchlist.destroy({
                where: {
                    id
                }
            })
            res.status(200).json({message: "Watchlist deleted successfully"})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = WatchlistController