/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from '../style/colors';
import { MdHome } from 'react-icons/md';
import { useNavigate } from "react-router-dom";

function GoHomeBtn() {
  const navigate = useNavigate();

  const onClickGoHomeBtn = () => {
    navigate('/', {replace: true});
  }

  return (
    <div
      css={css`
        position: fixed;
        top: 40px;
        left: 40px;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: ${colors[1]};
        border-radius: 2px;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.5);
        color: ${colors[5]};

        padding: 10px 14px;
        cursor: pointer;
      `}
      onClick={onClickGoHomeBtn}
    >
      <MdHome size={20} />
      <div
        css={css`
          font-weight: 700;
          font-size: 15px;
          margin-left: 5px;
        `}
      >
        Go to Home
      </div>
    </div>
  );
}

export default GoHomeBtn;