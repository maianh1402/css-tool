import React from "react";

interface CssProps {
  textShadowValue: string;
}

const CssCode = (props: CssProps) => {
  const { textShadowValue } = props;
  return (
    <div className="card py-[15px] mt-[20px]">
      <div className="pl-[20px]">
        <h2 className="polaris-heading font-semibold leading-[2.4rem]">
          CSS code
        </h2>
        <div className="my-[20px] text-[15px]">
          {`text-shadow: ${textShadowValue};`}
        </div>
      </div>
    </div>
  );
};

export default CssCode;
