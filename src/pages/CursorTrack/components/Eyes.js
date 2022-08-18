/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../../style/colors";
import { useEffect, useRef } from "react";

function Eyes() {
  const eyeRef = useRef();

  useEffect(() => {
    const onMouseMoveHandler = (e) => {
      if (eyeRef.current !== null) {
      eyeRef.current.style.left = e.clientX / window.innerWidth * 60 + 'px';
      eyeRef.current.style.top = (e.clientY / window.innerHeight * 30 - 10) + 'px';
      }
    }

    document.addEventListener('mousemove', e => onMouseMoveHandler(e));

    return () => document.removeEventListener('mousemove', e => onMouseMoveHandler(e));
  }, [])

  return (
    <div
      css={css`
        position: relative;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        width: 100px;
        height: 70px;
        border-radius: 50px;
      
        margin: 40px;
        background-color: ${colors[5]};
        // overflow: hidden;
      `}
    >
      <div
        ref={eyeRef}
        css={css`
          position: relative;
          left: 0;
          width: 40px;
          height: 40px;
          border-radius: 45px;

          background-color: ${colors[1]};
        `}
      />
      <div
        css={css`
          position: absolute;
          top: 10px;
          left: -12.5px;
          width: 125px;
          height: 125px;
          border-radius: 200px;
          background-color: transparent;
          outline: 20px solid ${colors[3]};
        `}
      />
      <div
        css={css`
          position: absolute;
          top: -65px;
          left: -12.5px;
          width: 125px;
          height: 125px;
          border-radius: 200px;
          background-color: transparent;
          outline: 30px solid ${colors[3]};
        `}
      />
    </div>
  );
}

export default Eyes;