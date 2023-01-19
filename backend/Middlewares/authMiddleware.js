const secret_key= process.env.access_key;
const jwt = require('jsonwebtoken');

const authMiddleware = async(req,res,next)=>{
    const  token = req.headers.token;
    if (!token) {
        return res.status(400).send("access denied");
    }
  try {
      const verifiedUser = jwt.verify(token, secret_key);
      // console.log(verifiedUser.id)
      req.body.id = verifiedUser.id;
      next();
    } catch (err) {
      res.status(400).send("invalid token");
    }
};

module.exports = authMiddleware;