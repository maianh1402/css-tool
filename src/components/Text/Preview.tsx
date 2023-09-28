import React, { useState } from "react";

interface PreviewProps {
  textShadowValue: string;
}

const Preview = (props: PreviewProps) => {
  const { textShadowValue } = props;
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
        <div className={`mx-[10px] py-[100px]`} style={{ background: bgColor }}>
          <span
            className="text-[60px] font-medium px-[30px]"
            style={{
              color: bgColorChildren,
              textShadow: textShadowValue,
            }}
          >
            Phương Anh
          </span>
        </div>
      </div>
    </>
  );
};

export default Preview;
