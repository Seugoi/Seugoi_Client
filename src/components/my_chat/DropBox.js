import style from "../../styles/chat/DropBox.module.css"

export function DropBox({showMenu}) {
    const clickButton= (content)=> {
        let isTrue = window.confirm(content);
        if(isTrue){
            console.log("나가기")
        }else{
            console.log("취소")
        }
    }
    
return(
    <div className={style['DropMenu']} style={{display: showMenu ? "flex": "none"}}>
        <li key={1} onClick={() => clickButton('채팅방을 나가시겠습니까?')}>나가기</li>
        <li key={2} onClick={() => clickButton('신고하시겠습니까?')} style={{color:"#DD5252"}}>신고하기</li>
    </div>

)

}