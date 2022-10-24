/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import GoHomeBtn from "../../components/GoHomeBtn";
import { colors } from "../../style/colors";
import DualRangeSlider from "./components/DualRangeSlider";

function Slider() {
  return (
    <div
      css={css`
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${colors[3]};

        width: 100%;
        height: 100%;
      `}
    >
      <GoHomeBtn />
      <DualRangeSlider />
    </div>
  );
}

export default Slider;