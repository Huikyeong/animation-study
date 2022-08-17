/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useRef, useState } from "react";

function GIF() {
  const gifRef = useRef();
  const [imgNum, setImgNum] = useState('00');

  useEffect(() => {
    const scrollCheck = () => {
      console.log('scroll!!');
      const unit = Math.floor(gifRef.current.offsetTop / (window.innerHeight * 5 / 39));
      if (unit < 10) {
        setImgNum('0' + String(unit));
      } else {
        setImgNum(unit);
      }
    };

    window.addEventListener('scroll', scrollCheck);

    return () => window.removeEventListener('scroll', scrollCheck);
  }, []);

  return (
    <div
      ref={gifRef}
      css={css`
        position: sticky;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: white;
      `}
    >
      <img src={require(`../../../images/onepunchman-00${imgNum}.jpg`)} alt={'img'} width={'100%'} height={'100%'} />
    </div>
  );
}

export default GIF;