const db = require('../dataBase/user')

module.exports = {
    getUsers: (req, res) => {
        res.json(db)
    },

    getUserById: (req, res) => {
       const { user_id } = req.params

        const user = db[user_id - 1]
        res.json({ user })
    },

    createUser: (req, res) => {
        console.log(req.body);
        db.push({...req.body, id: db.length + 1})
        res.json(db)
    },

    updateUser: (req, res) => {
        res.json('UPDATE USER')
    }
}
