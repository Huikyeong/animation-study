/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../style/colors";
import GoHomeBtn from "../../components/GoHomeBtn";

function Exhibition() {
  return (
    <div
      css={css`
        display: flex;
        width: 100vw;
        height: 100vh;

        background-color: ${colors[2]};
      `}
    >
      <GoHomeBtn />
    </div>
  );
}

export default Exhibition;