import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Videos } from './';

import { fetchFromAPI } from '../utils/fetchFromAPI';


const SearchFeed = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=`)
      .then((data) => setVideos(data.items))

  }, []);


  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
    <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
      Search results for: <span style={{ color: '#F31503' }}>
        <Videos videos={videos} />
      </span>
    </Typography>
  </Box>
  )
};


export default SearchFeed