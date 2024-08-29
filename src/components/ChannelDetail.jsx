import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const { id } = useParams();
  
  console.log(channelDetail, videos)

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(9,199,237,1) 0%, rgba(244,12,12,1) 50%, rgba(9,199,237,1) 100%)',
          zIndex: 10,
          height: '300px'
        }}          
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ml: {sm: '160px'}}}>
        <Videos videos={videos} />
        </Box> 
      </Box>
    </Box>
  )
}

export default ChannelDetail