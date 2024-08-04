import style from "../../styles/chat/ChatItem.module.css"
export function ChatItem() {
    return(
        <div className={style["chatContainer"]}>
            <img className={style["profile"]} src="/img/chat/test.png" alt=""/>
            <div style={{"marginLeft" : 7}}>
                <p className={style['nickName']}>김영철</p>
                <div style={{display:"flex", alignItems:"end"}}>
                <div className={style['chatting']}>오예오예 오예예!</div>
                <p className={style['date']}>6:30</p>
                </div>
            </div>
            
        </div>
    )
}