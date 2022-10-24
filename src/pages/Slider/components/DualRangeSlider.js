/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../../style/colors";
import { useState, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

function DualRangeSlider({ max, t, setSliderMin, setSliderMax, defaultMinValue, defaultMaxValue }) {
  const constraintsRef = useRef(null);
  const [minNodeX, setMinNodeX] = useState(
      defaultMinValue ? getPixelValue(defaultMinValue) : 0
    );
  const [maxNodeX, setMaxNodeX] = useState(
      defaultMaxValue ? getPixelValue(defaultMaxValue) : trackWidthInPx
    );
  // We use trackLength to increase the length of the slider.
  const trackLength = 10;
  // `trackWidth` is the final width of the slider.
  const trackWidth = 1.5 * trackLength;
  // We use `rem` as our size values so we need to multiple the width by 16 (1rem = 16px)
  const trackWidthInPx = trackWidth * 16; //192
  // This is a scale to increase the size of the Knobs/Thumbs
  const knobSize = 2;
  const knobSizeInPx = knobSize * 16;
  // This is the amount of range we want to keep between two thumbs/knobs to avoid them stacking
  const knobSeparatorLength = knobSizeInPx * 2.25;

  // max is a number value (ex. 4000)
  function getPixelValue(knob) {
    return (knob / max) * trackWidthInPx;
  }

  // We calculate the value of the knob on the track. We like to increment in steps of 5
  function getValueOfKnob(knob) {
    const value = parseInt(
      (max / (trackWidthInPx / knob)).toFixed(0),
      10
    );
    return Math.ceil(value / 5) * 5;
  }


  return (
    <div>
      <motion.div ref={constraintsRef}>

      </motion.div>
    </div>
  );
}

/*
function DualRangeSlider() {
  const [prevCursorPos, setPrevCursorPos] = useState(0);
  const [minNode, setMinNode] = useState(0);
  const [maxNode, setMaxNode] = useState(500);
  const minNodeRef = useRef(0);
  const prevCursorPosRef = useRef(0);

  const onDragStartNode = (e) => {
    console.log("drag start! e.clientX: ", e.clientX);
    // e.preventDefault();
    // setPrevCursorPos(e.clientX);
    var img = new Image();
    e.dataTransfer.setDragImage(img, 0, 0);
    prevCursorPosRef.current = e.clientX;
  }

  const onDragNode = (e) => {
    // e.preventDefault();
    // setMinNode(minNode + e.clientX - prevCursorPos);
    if (e.clientX > 0) {
      minNodeRef.current = e.clientX - prevCursorPosRef.current;
      e.target.style.left = `${minNode + minNodeRef.current}px`;
      console.log("dragging... ", minNodeRef.current);
    }
  }

  const onDragEndNode = (e) => {
    setMinNode(minNode + minNodeRef.current);
  }

  return (
    <div
      css={css`
        width: 500px;
        height: 15px;
        border-radius: 15px;
        background-color: ${colors[5]};
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
      `}
    >
      <div 
        draggable
        css={css`
          width: 30px;
          height: 30px;
          border-radius: 30px;
          background-color: white;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

          position: relative;
          top: -7.5px;
          left: ${minNode}px;

          transition: all .25s;
          &:active {
            transform: scale(0.95);
          }
        `}
        onDragStart={(e) => onDragStartNode(e)}
        onDrag={(e) => onDragNode(e)}
        onDragEnd={(e) => onDragEndNode(e)}
      />
    </div>
  );
}
*/
export default DualRangeSlider;