import { useState, useEffect } from "react";
import CateType from "./cateType";
import AddTypeToCate from "./addTypeToCate";
export default function Details({ data }) {
  const [bgChanger, setBgChanger] = useState(false);
  const [name, setName] = useState();
  const [showTypes, setShowTypes] = useState(false);
  const [type, setType] = useState();

  const onFocus = () => setBgChanger(true);
  const onBlur = () => setBgChanger(false);

  useEffect(() => {
    const getDataInfo = () => {
      setName(data.name);
      setType(data.type);
    };
    getDataInfo();
  }, []);

  return (
    <div className="flex flex-col mt-[10px]">
      <div
        className={`flex flex-col bg-zinc-300 w-1/2 h-[60px] border-b-2 border-black rounded-t-lg ${
          bgChanger && "border-b-blue-600 bg-zinc-200"
        }`}
      >
        <div
          className={`pl-3 text-sm h-4 mt-1 mb-1 ${
            bgChanger && "text-blue-600 transition duration-150"
          }`}
        >
          Name*
        </div>
        <input
          onBlur={onBlur}
          onFocus={onFocus}
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          className={`pl-3 text-2xl bg-zinc-300 w-4/5 outline-none ${
            bgChanger && "bg-zinc-200"
          }`}
        />
      </div>
      <div className="flex flex-col mt-7">
        <button
          className="text-3xl w-[100px] h-[60px] text-white rounded-xl bg-blue-400"
          onClick={() => {
            if (showTypes) {
              setShowTypes(false);
            } else {
              setShowTypes(true);
            }
          }}
        >
          Types
        </button>
        <div className="mt-5 ">
          {showTypes ? (
            <div>
              <div className="grid grid-cols-5 xl:grid-cols-7 3xl:grid-cols-6 2xl:grid-cols-5 grid-flow-row gap-3">
                {type.map((item, index) => {
                  return (
                    <div key={index}>
                      <CateType type={item} />
                    </div>
                  );
                })}
              </div>
              <AddTypeToCate/>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      {/* <select>
            {type?.map((item , index) => {
              return <option key={index} value={item}>{item}</option>
            })}
      </select> */}
    </div>
  );
}
