/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function ImageFrame({ imgName }) {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;

        box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.2);

        margin-left: 100px;
        opacity: 0.5;

        transition: all 0.25s ease;
        &:hover{
          opacity: 1;
          transform: translateY(-10px);
        }
      `}  
    >
      <img src={require(`../../../images/${imgName}`)} alt='img' height={500} />
    </div>
  );
}

export default ImageFrame;