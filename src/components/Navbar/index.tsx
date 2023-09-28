import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleClickText = () => {
    navigate("/text-shadow");
  };
  const handleClickBox = () => {
    navigate("/box-shadow");
  };
  const handleClickBorder = () => {
    navigate("/border");
  };
  const handleClickGradient = () => {
    navigate("/gradient");
  };
  const handleClickTransform = () => {
    navigate("/transform");
  };

  return (
    <header className="bg-[#fff] mt-[20px]">
      <ul className="flex justify-center  py-[20px]">
        <li>
          <Link className="text-[16px] px-4" onClick={handleClickBox} to={"/"}>
            Box shadow
          </Link>
        </li>
        <li>
          <Link
            to={"/text-shadow"}
            className="text-[16px] px-4"
            onClick={handleClickText}
          >
            Text shadow
          </Link>
        </li>
        <li>
          <Link
            to={"/border"}
            className="text-[16px] px-4"
            onClick={handleClickBorder}
          >
            Border
          </Link>
        </li>
        <li>
          <Link
            to={"/transform"}
            className="text-[16px] px-4"
            onClick={handleClickTransform}
          >
            Transform
          </Link>
        </li>
        <li>
          <Link
            to={"/gradient"}
            className="text-[16px] px-4"
            onClick={handleClickGradient}
          >
            Gradient
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
