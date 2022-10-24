/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../../style/colors";
import { useCallback, useMemo } from "react";

function File({ fileName, audioSrc }) {
  const audio = useMemo(() => {
    return new Audio(audioSrc);
  }, [audioSrc])

  const playAudio = useCallback(async() => {
    await audio.play();
  }, [audio]);

  return (
    <div
      css={css`
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 500px;
        height: 40px;
        border: 1px solid black;
        background-color: white;
        padding: 10px 15px;
        margin: 5px 0;
        font-size: 16px;
      `}
    >
      {fileName}
      <div
        css={css`
          display: flex;
        `}
      >
        <div
          css={css`
            margin-right: 15px;
            cursor: pointer;
          `}
          onClick={playAudio}
        >
          play
        </div>
        <div
          css={css`
            cursor: pointer;
          `}
        >
          x
        </div>
      </div>
    </div>
  );
}

export default File;
