import React, { useEffect, useState } from "react";
import { GoPencil } from "react-icons/go";
import { AiOutlineDelete } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import Preview from "./Preview.tsx";
import CssCode from "./CssCode.tsx";
import InputRange from "../@elements/Input.tsx";
import Button from "../@elements/Button.tsx";
import { Layer } from "../../interface.tsx";
import Navbar from "../Navbar/index.tsx";

const BoxShadow: React.FC = () => {
  const [shiftRight, setShiftRight] = useState(0);
  const [shiftDown, setShiftDown] = useState(0);
  const [spread, setSpread] = useState(0);
  const [blur, setBlur] = useState(0);
  const [opacity, setOpacity] = useState(0);

  const [choice, setChoice] = useState(false);
  const [layers, setLayers] = useState<Layer[]>([]);
  const [choiceColor, setChoiceColor] = useState(`rgba( 0, 0, 0 `);
  const [boxShadow, setBoxShadow] = useState("");

  useEffect(() => {
    updateTextShadowValue();
  }, [shiftRight, shiftDown, spread, blur, opacity]);

  const updateTextShadowValue = () => {
    const boxShadow = `${shiftRight}px ${shiftDown}px ${spread}px ${blur}px rgba(0, 0, 0, ${
      opacity / 100
    })`;
    setBoxShadow(boxShadow);
  };

  const handleAddLayer = () => {
    const newLayer = [
      ...layers,
      {
        id: Math.random(),
        right: shiftRight,
        down: shiftDown,
        spread: spread,
        blur: blur,
        opacity: opacity,
        boxShadow: boxShadow,
      },
    ];
    setLayers(newLayer);
  };
  const hexToRgba = (hex: string): string => {
    const red = parseInt(hex.slice(1, 3), 16);
    const green = parseInt(hex.slice(3, 5), 16);
    const blue = parseInt(hex.slice(5, 7), 16);
    return `rgba(${red}, ${green}, ${blue}`;
  };
  const handleDeleteLayer = (id: number) => {
    const updatedLayers = [...layers].filter((layer) => layer.id !== id);
    setLayers(updatedLayers);
  };
  const handleChangeLayer = (index: number): void => {
    setChoice(true);
    const choiceLayer = layers[index];
    setShiftRight(choiceLayer.right);
    setShiftDown(choiceLayer.down);
    setSpread(choiceLayer.spread);
    setBlur(choiceLayer.blur);
    setOpacity(choiceLayer.opacity);
    setChoiceColor(choiceLayer.boxShadow);
  };

  return (
    <>
      <Navbar />
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
              <li
                className={`${
                  choice === false
                    ? "bg-[#7468fb] text-white"
                    : "hover:bg-[#f5f5f5]"
                } card_item flex justify-between py-[15px] mx-[20px]`}
              >
                <div className="text-[18px] cursor-move">
                  <CgMenuGridO />
                </div>
                <div className="w-[80p%] text-[15px] cursor-move">
                  <span>{boxShadow}</span>
                </div>
                <div className="flex items-center text-[18px] cursor-move">
                  <GoPencil className="mr-[15px]" />
                  <AiOutlineDelete className="mr-[15px]" />
                </div>
              </li>
              {layers.map((layer, index) => (
                <li
                  key={index}
                  className={`${
                    choice === true
                      ? "bg-[#7468fb] text-white"
                      : "hover:bg-[#f5f5f5]"
                  } card_item flex justify-between py-[15px] mx-[20px]`}
                >
                  <div className="text-[18px] cursor-move">
                    <CgMenuGridO />
                  </div>
                  <div className="w-[80p%] text-[15px] cursor-move">
                    <span>{layer.boxShadow}</span>
                  </div>
                  <div className="flex items-center text-[18px] cursor-pointer">
                    <GoPencil
                      className="mr-[15px]"
                      onClick={() => handleChangeLayer(index)}
                    />
                    <AiOutlineDelete
                      className="mr-[15px]"
                      onClick={() => handleDeleteLayer(layer.id)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Preview boxShadow={boxShadow} />
            <CssCode boxShadow={boxShadow} />
          </div>
        </div>
      </main>
    </>
  );
};

export default BoxShadow;
