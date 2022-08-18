/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../../style/colors";
import { useState } from "react";

function ToggleSimpleDevelop() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      css={css`
        box-sizing: border-box;
        display: flex;
        align-items: center;
        width: 100px;
        height: 50px;
        border-radius: 50px;
        
        padding: 5px;
        margin: 50px;
        background-color: ${isOn ? '#0a369d' : '#cfdee7'};

        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        transition: all .25s ease;
      `}
      onClick={() => setIsOn(!isOn)}
    >
      <div
        css={css`
          position: relative;
          top: 0;
          left: ${isOn ? '50px' : 0};

          display: flex;
          width: 40px;
          height: 40px;
          border-radius: 45px;

          background-color: ${isOn ? '#cfdee7' : '#0a369d'};
          
          overflow: hidden;
          transition: all .25s ease;
        `}
      >
        <div
          css={css`
            position: relative;
            top: 0;
            left: ${isOn ? '-50px' : 0};

            display: flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;

            width: 40px;
            height: 40px;

            color: ${colors[5]};
            font-weight: 600;
            font-size: 12px;

            transition: all .25s ease;

            user-select: none;
          `}
        >
          OFF
        </div>
        <div
          css={css`
            position: relative;
            top: 0;
            left: ${isOn ? '-40px' : '10px'};

            display: flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;

            width: 40px;
            height: 40px;

            color: ${colors[1]};
            font-weight: 600;
            font-size: 12px;

            transition: all .25s ease;

            user-select: none;
          `}
        >
          ON
        </div>
      </div>
    </div>
  );
}

export default ToggleSimpleDevelop;