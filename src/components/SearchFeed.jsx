import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Videos } from './';
import { useParams } from 'react-router-dom';

import { fetchFromAPI } from '../utils/fetchFromAPI';


const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);


  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
    <Typography variant="h4" fontWeight={900} mb={3} ml={{ sm: '100px'}} sx={{ color: 'white' }}>
      Search results for: <span style={{ color: '#F31503' }}>{searchTerm}</span> videos
        
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
          <Videos videos={videos} />
      </Box>
    </Typography>
  </Box>
  )
};


export default SearchFeed