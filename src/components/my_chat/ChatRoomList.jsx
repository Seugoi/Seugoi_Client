import { useState } from "react";
import { ChatRoomItem } from "./ChatRoomItem";
import style from "../../styles/chat/ChatRoomList.module.css";
import { useNavigate } from "react-router";
export function ChatRoomList() {
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
    <div className={style["roomContainer"]}>
      {rooms.map((room, index) => (
        <ChatRoomItem room={room} key={index} onClick={() => navigate('/chat')}/>
      ))}
    </div>
  );
}
