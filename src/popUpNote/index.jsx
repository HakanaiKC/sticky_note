import { useState } from "react";
import { BoldOutlined, ItalicOutlined, PlusOutlined } from "@ant-design/icons";
import "./index.css";

const PopUpNote = ({
  open,
  setOpen,
  setListNotes,
  listNotes,
  content,
  id,
  // setIsItalic,
  // setIsBold,
  // isBold,
  // isItalic,
}) => {
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const handleInputNote = (e) => {
    // eslint-disable-next-line react/prop-types
    const rs = listNotes.map((item) =>
      item.id === id ? { ...item, content: e.target.value } : item
    );
    setListNotes(rs);
  };

  const handleChangeBold = () => {
    setIsBold(!isBold);
  };

  const handleChangeItalic = () => {
    setIsItalic(!isItalic);
  };

  console.log(open);

  return (
    <>
      {open && (
        <div className="absolute right-[90px] top-[50px] w-[300px] h-[400px] bg-[#FFF7D1] shadow-lg flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-gray-300">
            <PlusOutlined className="text-2xl hover:bg-gray-200 p-1 rounded-full cursor-pointer" />
            <div
              className="text-xl hover:bg-gray-200 p-1 rounded-full cursor-pointer"
              onClick={() => setOpen(false)}
            >
              X
            </div>
          </div>

          <textarea
            className={`w-full h-[250px] bg-[#FFF7D1] p-4 focus-visible:outline-none text-start resize-none ${
              isBold && "font-bold"
            } ${isItalic && "italic"}`}
            placeholder="Take a note..."
            onChange={(e) => handleInputNote(e)}
            defaultValue={content}
          />

          <div className="flex justify-start p-2 bg-[#FFF7D1] border-t border-gray-300">
            <button
              className="text-gray-700 p-2 text-lg hover:text-gray-900 hover:bg-[rgba(0,0,0,0.06)]"
              onClick={() => handleChangeBold()}
            >
              <BoldOutlined />
            </button>
            <button
              className="text-gray-700 p-2 text-lg hover:text-gray-900 hover:bg-[rgba(0,0,0,0.06)]"
              onClick={handleChangeItalic}
            >
              <ItalicOutlined />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default PopUpNote;
