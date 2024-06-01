import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({video}) => {

  return (
    <Link className='w-[30%] cursor-pointer' to={"/watch?v="+video.id}>
        <img className='rounded-lg' width={400} src={video.snippet.thumbnails.medium.url} alt="Video Thumbnail" />
        <div className="info">
            {/* <img src="" alt="Channel Logo" /> */}
            <h1 className=' font-semibold text-sm py-1'>{video.snippet.title}</h1>
        </div>
    </Link>
  )
}

export default VideoCard