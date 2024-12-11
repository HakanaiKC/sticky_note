import {
  PlusOutlined,
  SearchOutlined,
  SmallDashOutlined,
} from "@ant-design/icons";
import Dropdown from "antd/es/dropdown/dropdown";
import { useState } from "react";
import PopUpNote from "./popUpNote";

function App() {
  const [listNotes, setListNotes] = useState([
    {
      id: Date.now(),
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae officiis ipsa libero quia ipsum sed et numquam
                aliquid obcaecati error.`,
    },
  ]);

  const [getNoteContent, setGetNoteContent] = useState();
  const [open, setOpen] = useState(false);

  const handleOpenNote = (item) => {
    setGetNoteContent(item);
    setOpen(true);
  };

  const handleAddNewNotes = () => {
    const newListNote = { id: Date.now(), content: "" };
    setListNotes((prev) => [...prev, newListNote]);
  };

  const handleDeleteNotes = (id) => {
    const rs = listNotes.filter((item) => item.id !== id);
    setListNotes(rs);
  };

  return (
    <div className="flex justify-center relative">
      <div className="border-2 border-gray-400 w-[500px] h-[750px] shadow-2xl overflow-auto">
        <div className="flex justify-start" onClick={handleAddNewNotes}>
          <PlusOutlined className="p-4 hover:bg-gray-200" />
        </div>
        <div className="m-3 relative">
          <input
            type="text"
            className="bg-gray-200 w-full p-2"
            placeholder="Search..."
          />
          <SearchOutlined className="absolute inset-y-0 right-0 flex items-center pr-5" />
        </div>
        {listNotes.map((item) => (
          <div
            className="m-3"
            key={item.id}
            onDoubleClick={() => handleOpenNote(item)}
          >
            <div className="bg-[#FFF7D1] w-full h-[200px] p-3">
              <div className="flex justify-end">
                <Dropdown
                  menu={{
                    items: [
                      {
                        label: (
                          <button onClick={() => handleOpenNote(item)}>
                            Open Note
                          </button>
                        ),
                        key: "0",
                      },
                      {
                        label: (
                          <button onClick={() => handleDeleteNotes(item.id)}>
                            Delete Note
                          </button>
                        ),
                        key: "1",
                      },
                    ],
                  }}
                >
                  <SmallDashOutlined className="text-2xl" />
                </Dropdown>
              </div>
              {/* <p className={`${isBold && "font-bold"} ${isItalic && "italic"}`}> */}
              <p>{item.content}</p>
            </div>
            <PopUpNote
              setOpen={setOpen}
              open={open}
              setListNotes={setListNotes}
              listNotes={listNotes}
              getNoteContent={getNoteContent}
              id={item.id}
              // setIsBold={setIsBold}
              // setIsItalic={setIsItalic}
              // isItalic={isItalic}
              // isBold={isBold}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
