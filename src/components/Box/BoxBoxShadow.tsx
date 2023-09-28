import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { GoPencil } from "react-icons/go";
import { AiOutlineDelete } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import Preview from "./Preview.tsx";
import CssCode from "./CssCode.tsx";
import InputRange from "../@elements/Input.tsx";
import Button from "../@elements/Button.tsx";
import { Layer } from "../../interface.ts";

const BoxShadow = () => {
  const [shiftRight, setShiftRight] = useState(0);
  const [shiftDown, setShiftDown] = useState(0);
  const [spread, setSpread] = useState(0);
  const [blur, setBlur] = useState(0);
  const [opacity, setOpacity] = useState(0);

  const [layers, setLayers] = useState<Layer[]>([]);
  const [choiceColor, setChoiceColor] = useState(`rgba(0, 0, 0, `);

  const handleAddLayer = () => {
    const newLayer = [
      ...layers,
      {
        right: shiftRight,
        down: shiftDown,
        spread: spread,
        blur: blur,
        opacity: opacity,
        color: choiceColor,
      },
    ];
    setLayers(newLayer);
  };
  const hexToRgba = (hex) => {
    const red = parseInt(hex.slice(1, 3), 16);
    const green = parseInt(hex.slice(3, 5), 16);
    const blue = parseInt(hex.slice(5, 7), 16);
    return `rgba(${red}, ${green}, ${blue}`;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-[20px]">
      <div className="container mx-auto px-[100px] grid grid-cols-2 gap-5">
        <div className="card py-[15px]">
          <h2 className="font-semibold leading-[2.4rem] pl-[20px]">
            Box-Shadow CSS Generator
          </h2>
          <>
            <div className="card_item">
              <InputRange
                value={shiftRight}
                min={-100}
                max={100}
                onChange={(e) => setShiftRight(Number(e.target.value))}
              >
                Shift right
              </InputRange>
            </div>
            <div className="card_item">
              <InputRange
                value={shiftDown}
                min={-100}
                max={100}
                onChange={(e) => setShiftDown(Number(e.target.value))}
              >
                Shift down
              </InputRange>
            </div>
            <div className="card_item">
              <InputRange
                value={spread}
                min={0}
                max={100}
                onChange={(e) => setSpread(Number(e.target.value))}
              >
                Spread
              </InputRange>
            </div>
            <div className="card_item">
              <InputRange
                value={blur}
                min={0}
                max={100}
                onChange={(e) => setBlur(Number(e.target.value))}
              >
                Blur
              </InputRange>
            </div>
            <div className="card_item">
              <InputRange
                value={opacity}
                min={0}
                max={100}
                onChange={(e) => setOpacity(Number(e.target.value))}
              >
                Opacity
              </InputRange>
            </div>
            <div className="card_item">
              <input type="checkbox" className="cursor-pointer" />
              <label className="font-normal pl-[10px]">Inset</label>
            </div>
            <div className="card_item pb-4">
              <input
                type="color"
                value={choiceColor}
                onChange={(e) => setChoiceColor(hexToRgba(e.target.value))}
                className="w-[50px] h-[35px]"
              />
            </div>
          </>
          <hr />
          <div className="card_item">
            <Button
              onClick={handleAddLayer}
              className="border-solid border px-4 py-2 rounded-[3px]"
            >
              Add Layer
            </Button>
          </div>
          <ul>
            <li className="card_item bg-[#f5f5f5] flex justify-between py-[15px] mx-[20px]">
              <div className="text-[18px] cursor-move">
                <CgMenuGridO />
              </div>
              <div className="w-[80p%] text-[15px] cursor-move">
                <span>
                  {`${shiftRight}px ${shiftDown}px ${spread}px ${blur}px ${choiceColor} ${
                    opacity / 100
                  })`}
                </span>
              </div>
              <div className="flex items-center text-[18px] cursor-pointer">
                <GoPencil className="mr-[15px]" />
                <AiOutlineDelete className="mr-[15px]" />
              </div>
            </li>
            {layers.map((layer, index) => (
              <li
                key={index}
                className="card_item bg-[#f5f5f5] flex justify-between py-[15px] mx-[20px]"
              >
                <div className="text-[18px] cursor-move">
                  <CgMenuGridO />
                </div>
                <div className="w-[80p%] text-[15px] cursor-move">
                  <span>{`${layer.right}px ${layer.down}px ${layer.spread}px ${
                    layer.blur
                  }px ${layer.color}, ${layer.opacity / 100})`}</span>
                </div>
                <div className="flex items-center text-[18px] cursor-pointer">
                  <GoPencil className="mr-[15px]" />
                  <AiOutlineDelete className="mr-[15px]" />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Preview />
          <CssCode />
        </div>
      </div>
    </main>
  );
};

export default BoxShadow;
