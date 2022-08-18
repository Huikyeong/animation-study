/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

function ToggleEye() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      css={css`
        position: relative;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        width: 100px;
        height: 50px;
        border-radius: 50px;
      
        margin: 50px;
        background-color: #cfdee7;
        // overflow: hidden;

        cursor: pointer;
        transition: all .25s ease;
      `}
      onClick={() => setIsOn(!isOn)}
    >
      <div
        css={css`
          position: relative;
          left: ${isOn ? 0 : '50px'};
          width: 50px;
          height: 50px;
          border-radius: 45px;

          background-color: #0a369d;

          transition: all .25s ease;
        `}
      />
      <div
        css={css`
          position: absolute;
          top: 0;
          left: -12.5px;
          width: 125px;
          height: 125px;
          border-radius: 200px;
          background-color: transparent;
          outline: 15px solid #6d8ac2;
        `}
      />
      <div
        css={css`
          position: absolute;
          top: -75px;
          left: -12.5px;
          width: 125px;
          height: 125px;
          border-radius: 200px;
          background-color: transparent;
          outline: 15px solid #6d8ac2;
        `}
      />
    </div>
  );
}

export default ToggleEye;