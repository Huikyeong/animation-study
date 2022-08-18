/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import GoHomeBtn from "../../components/GoHomeBtn";
import ToggleSimple from "./components/ToggleSimple";
import ToggleSimpleDevelop from "./components/ToggleSimpleDevelop";
import ToggleEye from "./components/ToggleEye";
import ToggleEyeDevelop from "./components/ToggleEyeDevelop";

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
      <ToggleSimpleDevelop />
      <ToggleEye />
      <ToggleEyeDevelop />
    </div>
  );
}

export default Toggle;