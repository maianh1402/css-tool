import React from "react";

const CssCode = () => {
  return (
    <div className="card py-[15px] mt-[20px]">
      <div className="">
        <h2 className="polaris-heading font-semibold leading-[2.4rem] pl-[20px]">
          CSS code
        </h2>
        <input
          className=""
          type="text"
          style={{ width: "80%", marginLeft: "33px", paddingBottom: "30px" }}
          readOnly
        >
          {/* 0px 0px 5px 5px rgba(0,0,0,0.2s) */}
        </input>
      </div>
    </div>
  );
};

export default CssCode;
