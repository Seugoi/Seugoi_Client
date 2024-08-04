import { Icon } from "@iconify/react";
import { useState } from "react";
import style from "../styles/chat/SearchChatRoom.module.css";
import { SearchChatRoomItem } from "../components/my_chat/SearchChatRoomItem";
import { useNavigate } from "react-router";
function SearchChatRoom() {
  const [inputValue, setInputValue] = useState("");
  const [rooms, setRoom] = useState([
    {
      title: "java study",
      content: "ㅋㅋ 그니까요",
      img: "/img/chat/test.png",
      date: "6:30",
    },
    {
      title: "java study",
      content: "ㅋㅋ 그니까요",
      img: "/img/chat/test.png",
      date: "6:30",
    },
  ]);

  const navigate = useNavigate();
  return (
    <div className={style["container"]}>
      <div className={style["search-container"]}>
        <div onClick={()=> navigate('/my_chat')}>
        <Icon icon="formkit:left" style={{ fontSize: 25, color: "white" }} />
        </div>
        <div className={style["inputBox"]}>
          <Icon icon="bx:search" style={{ fontSize: 22, color: "#FFFFFF" }} />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className={style["input"]}
          />
        </div>
      </div>
      <div className={style["result-container"]}>
        {rooms.map((room, index) => (
          <SearchChatRoomItem room={room} key={index} />
        ))}
      </div>
    </div>
  );
}

export default SearchChatRoom;
