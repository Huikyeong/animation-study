/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

function ToggleSimple() {
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
          left: ${isOn ? '50px' : 0};
          width: 40px;
          height: 40px;
          border-radius: 45px;

          background-color: ${isOn ? '#cfdee7' : '#0a369d'};

          transition: all .25s ease;
        `}
      />
    </div>
  );
}

export default ToggleSimple;