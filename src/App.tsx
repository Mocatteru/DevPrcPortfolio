import { useCallback, useEffect, useState } from 'react';
import './App.css';
import _ from "lodash";

 function Main() {
  const [clickCounter, setClickCounter] = useState<number>(1);

  const onClickPlusButton = () => {
    console.log('기모띠');
    if(!_.isEqual(clickCounter, 10)) {
      setClickCounter(value => value + 1);
    }
  };


  return (
    <div>
      <h1>반갑습니다</h1>
      <h3>{clickCounter} 회</h3>
      <button onClick={onClickPlusButton}>10까지증가버튼</button>
    </div>
  );
}

export default Main;
