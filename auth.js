let admin = false

const users = [
    {
        username: "gabriel",
        password: "password"
    },
    {
        username: "admin",
        password: "123456"
    },
    {
        username: "root",
        password: "root"
    }
]

const isAuthenticated = (req, res, next) => {
    const username = req.params.username
    const password = req.params.password
    if (admin) {
        return next()
    } else {
        const response = {
            error: -1,
            description: `${req.path} ${req.mehtod} not authorized.`
        }
        res.status(401).json(response)
    }
}

module.exports = {
    isAuthenticated: isAuthenticated
}