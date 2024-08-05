import { useState, useEffect } from "react";
import { ChatRoomItem } from "./ChatRoomItem";
import style from "../../styles/chat/ChatRoomList.module.css";
import { useNavigate } from "react-router";
import { io } from 'socket.io-client';

export function ChatRoomList() {

  const [rooms, setRoom] = useState([]);

  const userId = localStorage.getItem("userId")
  const socket = io(`{process.env.REACT_APP_HOST}`); // 서버 주소에 맞게 변경

  useEffect(() => {
      // 사용자 채팅방 목록 요청
      socket.emit('getUserChatroomList', userId);
     
      // 채팅방 목록 수신
      socket.on('resUserChatroomList', (chatRooms) => {
        setRoom(chatRooms); // 받아온 채팅방 리스트를 상태에 저장
      });
     
      return () => {
          socket.disconnect();
      };
  }, [userId]);
  const navigate = useNavigate();

  return (
    <div className={style["roomContainer"]}>
      {rooms.map((room, index) => (
        <ChatRoomItem room={room} key={index} onClick={() => navigate('/chat')}/>
      ))}
    </div>
  );
}
