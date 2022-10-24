/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../../style/colors";
import { useRef, useState } from "react";
import File from "./File";

function FileInputBox() {
  const filesRef = useRef();

  const [files, setFiles] = useState([]);

  const clickUploadButton = () => {
    if (filesRef.current !== null) {
      filesRef.current.click();
      console.log("click upload button");
      return;
    }
    console.error("fileRef is null");
  };

  const onChangeFiles = (e) => {
    let i = 0;
    let newFiles = [...files];

    const reader = new FileReader();
    reader.onload = () => {

    }

    for (i = 0; i < e.target.files.length; i++) {
      // newFiles = [e.target.files[i], ...newFiles];
      newFiles = [{id: files.length + i, file: e.target.files[i], url:"" }, ...newFiles];
    }
    setFiles(newFiles);
    console.log(newFiles);
  };

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        width: 500px;
      `}
    >
      <div
        css={css`
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 500px;
          height: 250px;
          background-color: white;
          border: 2px dashed ${colors[4]};
          opacity: 0.6;
          cursor: pointer;
        `}
        onClick={clickUploadButton}
      >
        click to upload
      </div>
      <input
        css={css`
          display: none;
        `}
        type={"file"}
        ref={filesRef}
        multiple
        accept="audio/*"
        onChange={(e) => onChangeFiles(e)}
      />
      <div
        css={css`
          color: ${colors[2]};
          align-self: flex-start;
          font-weight: 700;
          font-size: 20px;
          margin: 20px 0 5px;
        `}
      >
        Selected Files
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          height: 200px;
          overflow-y: overlay;
        `}
      >
        {files.length > 0 ? (
          <div>
            {files.map((item) => (
              <File key={item.id} fileName={item.file.name} audioSrc={item.url} />
            ))}
          </div>
        ) : (
          <div
            css={css`
              color: black;
              font-weight: 500;
              font-size: 40px;
              opacity: 0.2;
              margin-top: 60px;
            `}
          >
            None
          </div>
        )}
      </div>
    </div>
  );
}

export default FileInputBox;
