import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

const Sekeltone = () => {
    return (
      <Box sx={{  width: 200,
        height: 330, pt: 2 }}>
        <Skeleton variant="rectangular" width={200} height={330} />
        <Skeleton width="80%" />
        <Skeleton width="60%" />
      </Box>
    );
  };

export default Sekeltone