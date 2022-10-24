/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../style/colors";
import GoHomeBtn from "../../components/GoHomeBtn";
import FileInputBox from "./components/FileInputBox";

function DragDrop() {
  return (
    <div
      css={css`
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background-color: ${colors[5]};
      `}
    >
      <GoHomeBtn />
      <FileInputBox />
    </div>
  );
}

export default DragDrop;