/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from 'react-router-dom';

function PageLinkBtn({ path, title }) {
  return (
    <Link 
      css={css`
        color: #CFDEE7;
        font-weight: 200;
        font-size: 22px;
        text-decoration: none;
        margin-bottom: 15px;
      `}
      to={path}
    >
      {title}
    </Link>
  );
}

export default PageLinkBtn;