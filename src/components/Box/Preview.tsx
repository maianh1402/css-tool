import React, { useState } from "react";

interface PreviewProps {
  boxShadow: string;
}
const Preview = (props: PreviewProps) => {
  const { boxShadow } = props;
  const [bgColor, setBgColor] = useState("#ffffff");
  const [bgColorChildren, setBgColorChildren] = useState("#7468fb");

  return (
    <>
      <div className="card w-[100%] pt-[15px]">
        <div className="flex justify-between">
          <h2 className="font-semibold leading-[2.4rem] pl-[20px] pb-[20px]">
            Preview
          </h2>
          <div className="flex pr-[20px]">
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className="w-[50px] h-[35px]"
            />
            <input
              type="color"
              value={bgColorChildren}
              onChange={(e) => setBgColorChildren(e.target.value)}
              className="w-[50px] h-[35px]"
            />
          </div>
        </div>
        <div className="m-[10px]" style={{ background: bgColor }}>
          <textarea
            className="min-w-[100px] max-w-[400px] min-h-[100px] max-h-[400px] m-[50px] resize"
            style={{ background: bgColorChildren, boxShadow: boxShadow }}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Preview;
