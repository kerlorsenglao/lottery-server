import userMessage from "../models/userMessage.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config()

///==get all user==
export const getUser = async (req,res)=>{
    try {
        const user = await userMessage.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({'message': error.message});
    }
}

export const createUser = async (req,res)=>{
    const user = req.body;
    const newUser = new userMessage(user);
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({'message': error.message});
    }
}

//======get user======
export const loginUser = async (req,res) => {
    const name = req.body.name;
    const password = req.body.password;
    try {
        var user = await userMessage.find({'name':name,'password':password});
        if(user[0]){
            user = user[0];
            // newuser = {name: user.name,password:user.password}
            const accessToken = 'ea3a24c5cfdfc172fdd8d2eb95e7f7062199f0f708562fee8b6ea984b082c7e801ca06f75d644bf9c8fa8b104b7e9aae2dc3086a77b5d591b14ced277eb1cfe4';
            
            // const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
            res.json({ Token: accessToken, user: user,msg:'Login successful!' });
        }else{
            res.status(200).json({msg:'Login failed please try again'});
        }
    } catch(error) {
        res.status(404).json({'message': error.message,msg:'Login failed, Please try again!'});
    }
}

// login
// router.post('/login', function (req, res) {
//     const username = req.body.name
//     const password = req.body.password
//     mysql.query(`SELECT * FROM user WHERE name=? AND password=?`, [username, password], function (err, result, fields) {
//         if (err) {
//             throw err
//         } else {
//             console.log('username:' + req.body.name);
//             if(result.length > 0) {
//                 const user = {id:result[0].id, name: result[0].name, password: result[0].password }
//                 //create token
//                 const acessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
//                 res.json({ Token: acessToken, user: user,msg:'Login successful!' });
//             }else{
//                 res.json({msg:'Login failed, Please try again!'})
//             }

//         }
//     })
// })

// function authenticateToken(req, res, next) {
//     const authHeader = req.headers['authorization']
//     //if we have authHeader it will return authHeader.split(' ')[1]
//     const token = authHeader && authHeader.split(' ')[1]
//     if (token == null) return res.sendStatus(401)
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//         if (err) return res.sendStatus(403)
//         req.user = user
//         next()
//     })
// }

