const jwt = require('jsonwebtoken');
const secretKey = 'whcss'

exports.sign = ({ account, role }, time = '3d') => {
    const token = jwt.sign({ account: account, role: role }, secretKey, {
        expiresIn: time
    })
    return token
}
exports.verify = (token) => {
    return jwt.verify(token, secretKey, (err, decode) => {
        if (err) {  //  时间失效的时候/ 伪造的token          
            return false
        } else {
            return decode
        }
    })
}
