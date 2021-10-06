const db = require('../dataBase/user')

module.exports = {
    getUsers: (req, res) => {
        res.json(db)
    },

    createUser: (req, res) => {
        res.json('CREATE USER')
    },

    updateUser: (req, res) => {
        res.json('UPDATE USER')
    }
}
