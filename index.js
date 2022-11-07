import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json())

const tweets = []
const userInfo = []

app.post("/sign-up", (req, res) => {
    console.log(req.body)
    //const newUser = {
      //  username: req.body.username,
        //avatar: req.body.avatar
    //}

    const newUser = req.body
    userInfo.push(newUser)
    res.status(201).send("OK")
    return;
})

app.post("/tweets", (req, res) => {

    const userPic = userInfo.find((user) => user.username === req.body.username)

    const newTweet = {
        username: req.body.username,
        tweet: req.body.tweet,
        avatar: userPic
    }

    tweets.push(newTweet)
    //res.send("OK")
    res.status(201).send("OK")
})

app.get("/tweets", (req, res) => {
    const latestTweets = tweets.slice(-10)
    res.send(latestTweets)
})

app.listen(5000, () => {
    console.log("Server running in port: 5000")
})