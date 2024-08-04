import prisma from "../DB/db.config.js"

// Create User
export const createUser = async (req,res) =>{
   const { name, email , password} = req.body

   const findUser = await prisma.user.findUnique({
       where :{
        email : email
       }
   })

   if(findUser){
    return res.json({
        status:400,
        message:"Email Already Taken.Please choose Another"
    })
   }

   const newUser = await prisma.user.create({
    data:{
        name:name,
        email:email,
        password:password
    }
   })

   return  res.json({Status:201,data:newUser,message:"User Created SucessFully."})
}

// Get All Users
export const fetchUser = async (req,res) =>{
    const userindb = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
        }
    });

    return res.json({Status:200,data:userindb});
}

// Get  User details by id
export const getUser = async(req,res) =>{
    const userid = req.params.id;
    console.log("id : " + userid)

    const user = await prisma.user.findFirst({
        where:{
            id:Number(userid),
        }
    })
    if(!user){
        return res.json({Status:400,message:"User Not Found,Try Letter"})
    }
    return res.json({Status:200,data:user});
}

// Update user
export const updateUser = async (req,res) =>{
    const userid = req.params.id
    const { name, email , password} = req.body
    
    await prisma.user.update({
        where:{ id:
            Number(userid)
        },
        data:{
            name:name,
            email:email,
            password:password
        }
    })
   return res.json({Status:200, message:"User Updated SucessFully"})
}
 
// Delate User
export const deleateUser = async(req,res)=>{
    const userid = req.params.id;
    const deleteduser = await prisma.user.delete({
        where:{
            id:Number(userid)
        }
    })
    return res.json({Status:200,data:deleateUser,message:"User Delete SucessFully"})
}