/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import GIF from "./components/GIF";
import GoHomeBtn from "../../components/GoHomeBtn";

function Scroll2() {
  return (
    <div
      css={css`
        box-sizing: border-box;
        background-color: #CFDEE7;
        width: 100vw;
        height: 500vh;
      `}
    >
      <GIF />
      <GoHomeBtn />
    </div>
  );
}

export default Scroll2;