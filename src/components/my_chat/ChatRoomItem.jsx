import { useNavigate } from "react-router";
import style from "../../styles/chat/chatRoomItem.module.css";

export function ChatRoomItem({ room }) {
  const navigate = useNavigate(); 
  
  return (
    <li className={style["itemContainer"]} onClick={() => navigate('/chat')}>
      <img className={style["itemImage"]} src={room.img} alt="" />
      <div
        style={{
          position: "absolute",
          left: "16.9vw",
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
