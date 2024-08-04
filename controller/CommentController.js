import prisma from "../DB/db.config.js"

// Create Post
export const createComment = async (req,res) =>{
   const { user_id , post_id, comment  } = req.body
 
   await prisma.post.update({
    where:{
        id:Number(post_id)
    },
    data:{
        comment_count:{
            increment:1
        }
    }
   })

   const newComment = await prisma.comment.create({
    data:{
         user_id:Number(user_id),
         post_id:Number(post_id),
         comment
    }
   })
   return  res.json({Status:201,data:newComment,message:"Comment  Created SucessFully."})
}

// Get All Post
export const fetchComment = async (req,res) =>{
    const comment = await prisma.comment.findMany({});
    return res.json({Status:200,data:comment});
}

// Get post by id
export const getSingleComment = async(req,res) =>{
    const commentid = req.params.id;
    const post = await prisma.comment.findFirst({
        where:{
            id:Number(commentid),
        }
    })
    if(!post){
        return res.json({Status:400,message:"User Not Found,Try Letter"})
    }
    return res.json({Status:200,data:post});
}

// Update Post
export const updatecomment = async (req,res) =>{
    const commentid = req.params.id;
    const { comment } = req.body
    
    await prisma.comment.update({
        where:{ id:
            Number(commentid)
        },
        data:{
            comment 
        }
    })
   return res.json({Status:200, message:"comment Updated SucessFully"})
}
 
// Delate Post
export const deleateComment = async(req,res)=>{
    const commentid = req.params.id;
    
    await prisma.post.update({
        where:{
            id:Number(post_id)
        },
        data:{
            comment_count:{
                decrement:1
            }
        }
       })


    const deleteduser = await prisma.comment.delete({
        where:{
            id:Number(commentid)
        }
    })
    return res.json({Status:200,message:"comment Delete SucessFully"})
}