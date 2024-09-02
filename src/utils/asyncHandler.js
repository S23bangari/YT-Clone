const asyncHandler = (requestHandler) => {
    (req,res,nect) =>{
        Promise.resolve(requestHandler(req,res,next)).
        catch( (err) => next(err))
    }
}



export {asyncHandler}


// const asyncHandler = (fn) => () => {}

// const asyncHandler = (fun) => async (req,res,next) => {
//     try{
//         await fun(req,res,next)
//     }catch(error){
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }