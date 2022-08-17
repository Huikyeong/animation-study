/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AiFillHome } from 'react-icons/ai';
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

        width: 50px;
        height: 50px;

        background-color: #CFDEE7;
        border-radius: 15px;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
        color: #0A369D;

        cursor: pointer;
      `}
      onClick={onClickGoHomeBtn}
    >
      <AiFillHome size={27} />
    </div>
  );
}

export default GoHomeBtn;