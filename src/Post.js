import { Avatar } from '@material-ui/core'
import { Publish, ChatBubbleOutline, FavoriteBorder, Repeat, VerifiedUser } from '@material-ui/icons'
import React from 'react'
import './Post.css'

function Post({
  displayName,
  username,
  verified,
  timestamp,
  text,
  image,
  avatar
}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTIyOTc0MjE5NV5BMl5BanBnXkFtZTcwNjgyODQwMg@@._V1_UY256_CR6,0,172,256_AL_.jpg"/>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Ali Hayder 
              <span className="post__headerSpecial"> 
                <VerifiedUser className="post__badge" />
                @ahayder
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur excepturi veritatis magnam fuga? Amet quae recusandae, non nesciunt veritatis excepturi ullam nihil distinctio quod. Quo, repellat earum. Sit, fugit ab!
            </p>
          </div>
        </div>
        <img src="https://media3.giphy.com/media/18W1Au6Zrj584/giphy.gif?cid=ecf05e47j7tsl6aeiu1wkcs8nulugxbtrcqxu787qahvedxt&rid=giphy.gif" alt=""/>
        <div className="post__footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <Publish fontSize="small" />
        </div>
      </div>
    </div>
  )
}

export default Post
