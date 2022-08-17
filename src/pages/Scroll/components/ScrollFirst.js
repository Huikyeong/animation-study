/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function ScrollFirst() {
  return (
    <div
      css={css`
        position: sticky;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: #0A369D;
        opacity: 0;
      `}
    >
      <div
        css={css`
          color: #CFDEE7;
          font-weight: 700;
        `}
      >
        응애~~
      </div>
    </div>
  );
}

export default ScrollFirst;