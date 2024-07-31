import { Box } from '@mui/system';
import ButtonAppBar from '../../compoenents/Appbar';
import DefaultScreen from '../../compoenents/DefaultScreen';

function GuitarScreen() {
  return (
    <Box
      sx={{
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100vh'
      }}
    >
      <ButtonAppBar title='기타솔로' />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100vh',
          backgroundColor: '#FFFFFF',
          alignItems: 'center'
        }}
      >
        <h1
          style={{
            marginBottom: '20px'
          }}
        >
          기타 페이지
        </h1>
        <iframe
          width='850'
          height='500'
          src='https://www.youtube.com/embed/CHNdW-XjPyY'
          title='엠씨더맥스(M.C The Max) - 어디에도 기타솔로 Guitar Cover #04년생 #shorts #guitar #어디에도 #168cm #취미 #strandberg'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        ></iframe>
      </Box>
    </Box>
  );
}

export default GuitarScreen;
