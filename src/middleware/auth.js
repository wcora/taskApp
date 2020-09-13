const jwt = require('jsonwebtoken');
const User = require('../models/user.js');

/* express middleware */
// without middleware: new request -> run route handler
// with middleware: new request -> do something (e.g. allow running, dont allow, etc.) -> run route handler
const auth = async (req, res, next) => {
    try{
        const token = req.header('Authorization').replace('Bearer ','');
        console.log(token)
        const decoded = jwt.verify(token, process.env.JWT_TOKEN)

        const user = await User.findOne({_id: decoded._id, 'tokens.token': token})

        if (!user){
            throw new Error()
        }
        req.token = token;
        req.user = user;
        // proceed
        next();
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate. '})
    }

}

module.exports = auth;
