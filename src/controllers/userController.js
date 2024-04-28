import { userSchema } from "../models/user";

const getAll = async ( req, res) =>{
    userSchema.fimd(function(error,usuarios){
        if (error){
            res.status(500).json({
                statusCode: 500,
                Message : error.Message
            });
        }
        res.status(200).json({
            statusCode: 200,
            data: {
                usuarios
            }
    })
    })

}
export default{
    getAll
}