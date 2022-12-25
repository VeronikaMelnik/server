import jwt from 'jsonwebtoken'

import { nextTick } from "process"

module.exports = function (req, res, nest) {
    if (req.method === "OPTIONS") {
        next()
    }
        try {
            const token = req.headers.authotization.split( '') [1]
        if (!token) {
            return res.status(403).json( {message: "Not authorisazed"})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        nextTick()
        } catch (error) {
            res.status(403).json( {message: "Not authorisazed"})
        }
}