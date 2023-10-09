import DefaultScreen from '../../compoenents/DefaultScreen';

function GuitarScreen() {
  return (
    <DefaultScreen flexDirection='column'>
      <h1
        style={{
          marginBottom: '82px'
        }}
      >
        기타 페이지
      </h1>
      <iframe
        width='950'
        height='534'
        src='https://www.youtube.com/embed/tku7pSza67g'
        title='又三郎 - ヨルシカ 마타사부로 guitar 연습 cover'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></iframe>
    </DefaultScreen>
  );
}

export default GuitarScreen;
