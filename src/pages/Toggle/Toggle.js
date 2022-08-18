/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import GoHomeBtn from "../../components/GoHomeBtn";
import ToggleSimple from "./components/ToggleSimple";
import ToggleEye from "./components/ToggleEye";

function Toggle() {
  return (
    <div
      css={css`
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #6d8ac2;

        width: 100%;
        height: 100%;
      `}
    >
      <GoHomeBtn />
      <ToggleSimple />
      <ToggleEye />
    </div>
  );
}

export default Toggle;