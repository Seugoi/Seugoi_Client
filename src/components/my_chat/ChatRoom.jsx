import { Icon } from "@iconify/react";
import { ChatRoomList } from "./ChatRoomList";
import style from "../../styles/chat/ChatRoom.module.css";
import { useNavigate } from "react-router";

export function ChatRoom() {
  const navigate = useNavigate();

  return (
    <div className={style["container"]}>
      <div className={style["headerBox"]}>
        <h1 style={{ color: "white", fontSize: 24 }}> 채팅</h1>
        <Icon
          icon="bx:search"
          style={{ color: "white", fontSize: 27 }}
          onClick={() => navigate("/search_chat")}
        />
      </div>

      <div className={style["chatRoomContainer"]}>
        <ChatRoomList />
      </div>
    </div>
  );
}
