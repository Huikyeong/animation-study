/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../style/colors";
import GoHomeBtn from "../../components/GoHomeBtn";
import Eyes from "./components/Eyes";

function CursorTrack() {
  return (
    <div
      css={css`
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background-color: ${colors[3]};
      `}
    >
      <GoHomeBtn />
      <Eyes />
      <Eyes />
    </div>
  );
}

export default CursorTrack;