import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core'
import db from './firebase'
import firebase from 'firebase'

function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState("")
  const [tweetImage, setTweetImage] = useState("")


  const sendTweet = (e) => {
    e.preventDefault()

    db.collection('posts').add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      displayName: 'Ali Hayder',
      username: 'ahayder',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTIyOTc0MjE5NV5BMl5BanBnXkFtZTcwNjgyODQwMg@@._V1_UY256_CR6,0,172,256_AL_.jpg"
    })

    setTweetMessage("");
    setTweetImage("");
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTIyOTc0MjE5NV5BMl5BanBnXkFtZTcwNjgyODQwMg@@._V1_UY256_CR6,0,172,256_AL_.jpg" />
          <input 
          onChange={(e) => setTweetMessage(e.target.value)}
          value={tweetMessage}
          placeholder="What's happening?" type="text" />
        </div>
        <input
          onChange={e => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Enter Image URL"
          type="text"
        />
        <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
