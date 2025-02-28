const express=require('express')
const jwt=require('jsonwebtoken')

const app=express()
app.use(express.json())
SECRET_KEY='bewd_CA_key'

const emp=[
    { empID:'E12345',password:'securePass'}
]

app.post('/login',(req,res)=>{
    try{

        const {empID,password}=req.body
        const employ=emp.find(e=>e.empID===empID && e.password===password)

        if(!employ){
            return res.status(401).send('Invalid credentails')
        }

        const token=jwt.sign({empID:employ.empID},SECRET_KEY,{expiresIn:'10m'})
        return res.json({token})

    }catch(err){
        return res.status(500).send({message:err.message})
    }

})

const TokenAuthorization=(req,res,next)=>{
    const authHeader=req.headers['authorization']
    const token=authHeader && authHeader.split(' ')[1]

    if(!token){
        return res.status(401).send({error:'Unauthorized'})
    }
    jwt.verify(token,SECRET_KEY,(err)=>{
        if(err){
            return res.status(401).send({error:'Unauthorized'})
        }
        next()
    })
}

app.get('/dashboard',TokenAuthorization,(req,res)=>{
    return res.status(201).send({message:'Welcome to your Employee Dashboard'})
})


PORT=8080
app.listen(PORT,()=>[
    console.log(`server running on http://localhost:${PORT}`)
])