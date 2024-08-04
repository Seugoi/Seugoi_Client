import { Icon } from "@iconify/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import style from '../styles/chat/ChatPage.module.css'
import { ChatItem } from "../components/my_chat/ChatItem";
import { ChatItem2 } from "../components/my_chat/ChatItem2";
import { DropBox } from "../components/my_chat/DropBox";
function ChatPage() {
    const [inputValue, setInputValue] = useState(''); 
    const [showMenu , setShowMenu] = useState(false);
    const navigate = useNavigate();
    const image = '/img/chat/test.png';
    
    
    const sendChatting = () => {

    }
    return(
        <div className={style["container"]}>
            <div className={style["headerBox"]}>
                <div onClick={()=> navigate('/my_chat')}>
                    <Icon icon="formkit:left" style={{ fontSize: 25, color: "white" }} />
                </div>
                <img src={image} className={style["chatRoomProfile"]} alt=""/>
                <p className={style["chatRoomTitle"]}>java study</p>
                <img src="img/chat/menu.svg" className={style["menu"]} alt=""  onClick={() => setShowMenu(!showMenu)}/>
            </div> 

            <div className={style["chatContainer"]}>
                <ChatItem/>
                <ChatItem2/>
            </div>
            <div className={style["chatBoxContainer"]}>
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="채팅 입력" onBlur=""/>
                <Icon icon="ic:round-image" style={{fontSize:24}}/>
                <div onClick={sendChatting}>
                <Icon icon="carbon:send-filled" style={{fontSize:24}}/>
                </div>
              
            </div>
            <DropBox showMenu={showMenu}/>
        </div>

    )

}

export default ChatPage;