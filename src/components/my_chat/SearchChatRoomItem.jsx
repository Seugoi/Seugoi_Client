import style from "../../styles/chat/SearchChatRoomItem.module.css";
import { useState } from "react";
export function SearchChatRoomItem({ room }) {
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
  return (
    <li className={style["itemContainer"]}>
      <img className={style["itemImage"]} src={room.img} alt="" />
      <div
        style={{
          position: "absolute",
          left: "20.9vw",
          display: "flex",
          flexDirection: "column",
          rowGap: 5,
        }}
      >
        <h1 className={style["itemTitle"]}>{room.title}</h1>
        <p className={style["itemContent"]}>{room.content}</p>
      </div>
      <p className={style["itemDate"]}>{room.date}</p>
    </li>
  );
}
