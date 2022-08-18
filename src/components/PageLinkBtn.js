/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../style/colors";
import { Link } from 'react-router-dom';

function PageLinkBtn({ path, title }) {
  return (
    <Link 
      css={css`
        color: ${colors[5]};
        font-weight: 200;
        font-size: 22px;
        text-decoration: none;
        margin-bottom: 15px;

        transition: all .2s;
        &:hover {
          opacity:0.5;
        }
      `}
      to={path}
    >
      {title}
    </Link>
  );
}

export default PageLinkBtn;