/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import GoHomeBtn from "../../components/GoHomeBtn";
import ScrollFirst from "./components/ScrollFirst";
import ScrollSecond from "./components/ScrollSecond";

function Scroll() {
  return (
    <div
      css={css`
        box-sizing: border-box;
        background-color: #CFDEE7;
      `}
    >
      <ScrollFirst />
      <ScrollSecond />
      <GoHomeBtn />
    </div>
  );
}

export default Scroll;