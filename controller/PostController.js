import prisma from "../DB/db.config.js"

// Create Post
export const createPost = async (req,res) =>{
   const { user_id , title , description  } = req.body

   const newPost = await prisma.post.create({
    data:{
         user_id:Number(user_id),
         title , 
         description
    }
   })

   return  res.json({Status:201,data:newPost,message:"Post Created SucessFully."})
}

// Get All Post
export const fetchPost = async (req,res) =>{
    const post = await prisma.post.findMany({
        include:{
            comment:true
        }
    });

    return res.json({Status:200,data:post});
}

// Get post by id
export const getSinglepost = async(req,res) =>{
    const postid = req.params.id;
    const post = await prisma.post.findFirst({
        where:{
            id:Number(postid),
        }
    })
    if(!post){
        return res.json({Status:400,message:"User Not Found,Try Letter"})
    }
    return res.json({Status:200,data:post});
}

// Update Post
export const updatePost = async (req,res) =>{
    const postid = req.params.id;
    const { title , description } = req.body
    
    await prisma.post.update({
        where:{ id:
            Number(postid)
        },
        data:{
            title, 
            description
        }
    })
   return res.json({Status:200, message:"Post Updated SucessFully"})
}
 
// Delate Post
export const deleatePost = async(req,res)=>{
    const postid = req.params.id;
    const deleteduser = await prisma.post.delete({
        where:{
            id:Number(postid)
        }
    })
    return res.json({Status:200,message:"Post Delete SucessFully"})
}