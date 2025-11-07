import express from "express";
const app = express();

app.get("/", (req, res)=>{
    res.status(200).json({
        "success": true,
        "docs": "/api/docs (Not ready yet)",
        "message" : "HoperRxPharma Backend is running successfully!"
    })
})


export default app