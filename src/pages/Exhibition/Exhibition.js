/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../style/colors";
import GoHomeBtn from "../../components/GoHomeBtn";
import ImageFrame from "./components/ImageFrame";

function Exhibition() {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        width: 100vw;
        height: 100vh;

        background-color: ${colors[2]};
      `}
    >
      <GoHomeBtn />
      <div
        css={css`
          position: absolute;
          right: 840px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: center;
          
          width: 100%;
          height: 100%;
          color: ${colors[3]};
        `}
      >
        <div
          css={css`
            font-size: 70px;
            font-weight: 900;
            line-height: 90%;
            text-align: right;
          `}
        >
          MobPsycho
        </div>
        <div
          css={css`
            font-size: 213px;
            font-weight: 900;
            line-height: 90%;
            text-align: right;
          `}
        >
          100
        </div>
      </div>
      <div
        css={css`
          display: flex;
          align-items: center;
          height: 80vh;

          overflow-x: scroll;

          padding: 0 80px 0 700px;
          
          font-size: 100px;
          font-weight: 900;

          z-index: 1;
          
          -ms-overflow-style: none;
          scrollbar-width: none;
          
          &::-webkit-scrollbar {
            display: none;
          }
        `}
      >
        <ImageFrame imgName={'MobPsycho1.jpeg'} />
        <ImageFrame imgName={'MobPsycho2.jpeg'} />
        <ImageFrame imgName={'MobPsycho3.jpeg'} />
        <ImageFrame imgName={'MobPsycho4.jpeg'} />
        <ImageFrame imgName={'MobPsycho5.jpeg'} />
        <ImageFrame imgName={'MobPsycho6.jpeg'} />
        <ImageFrame imgName={'MobPsycho7.jpeg'} />
        <ImageFrame imgName={'MobPsycho8.jpeg'} />
      </div>
    </div>
  );
}

export default Exhibition;