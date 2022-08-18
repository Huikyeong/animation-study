/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../style/colors";
import PageLinkBtn from "../../components/PageLinkBtn";

function Main() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        box-sizing: border-box;

        width: 100%;
        height: 100%;
        background-color: ${colors[1]};
        color: ${colors[5]};

        padding: 80px;
      `}
    >
      <div
        css={css`
          font-weight: 800;
          font-size: 40px;
          text-align: left;
          line-height: 130%;

          margin-bottom: 50px;
          z-index: 1;
        `}
      >
        희경이의<br/>애니메이션 <br/>모음
      </div>
      <div
        css={css`
          width: 100px;
          height: 10px;
          border-bottom: 1.5px solid ${colors[5]};

          margin: 10px 0 30px 0;

          display: none;
        `}
      />
      <div 
        css={css`
          position: absolute;
          top: -100px;
          left: 150px;
          width: 150px;
          height: 150px;
          background-color: ${colors[3]};
          border-radius: 500px;

          display: none;
        `}
      />
      <div 
        css={css`
          position: absolute;
          top: -250px;
          left: -190px;
          width: 400px;
          height: 400px;
          border: 4px solid ${colors[2]};
          border-radius: 500px;

          display: none;
        `}
      />
      <PageLinkBtn
        path='/scroll'
        title='Scroll'
      />
      <PageLinkBtn
        path='/scroll2'
        title='Scroll GIF'
      />
      <PageLinkBtn
        path='/toggle'
        title='Toggle Buttons'
      />
      <PageLinkBtn
        path='/cursortrack'
        title='Cursor Tracking Eyes'
      />
    </div>
  );
}

export default Main;