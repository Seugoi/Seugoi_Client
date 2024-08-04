import style from "../../styles/chat/ChatItem2.module.css"
import { Icon } from "@iconify/react";
export function ChatItem2() {
    return(
        <div className={style["chatContainer"]}>
            <img className={style["profile"]} src="/img/chat/test.png" alt=""/>
            <div style={{"marginRight" : 7, display:'flex', flexDirection:'column', alignItems:'end'}}>
                <span className={style['nickName']}><p>김영철</p> <Icon icon="ph:crown-simple-fill" /></span>
              
                <div style={{display:"flex",flexDirection:"row-reverse", alignItems:"end"}}>
                <div className={style['chatting']}>오예오예 오예예!</div>
                <p className={style['date']}>6:30</p>
                </div>
            </div>
            
        </div>
    )
}