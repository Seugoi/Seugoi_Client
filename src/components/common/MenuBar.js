import { useNavigate } from "react-router";
import style from "../../styles/common/MenuBar.module.css"
import { Icon } from "@iconify/react";

export function MenuBar (){
    const navigate = useNavigate(); 
    const go = (link) => {
        navigate(link);
    }
    const iconStyle = {
      fontSize:25, 
      color:'#ffff'
    }
    return(
        <div className={style['menuBarContainer']}>
            <li onClick={() =>go('/home')}><Icon icon="heroicons:home-20-solid" style={iconStyle}/> </li>
            <li onClick={() =>go('/my_study')}><Icon icon="bxs:book"  style={iconStyle}/></li>
            <li onClick={() =>go('/add')}><div className={style['round']}><Icon icon="ic:round-plus" style={{fontSize:35, color:'#ffff'}}/></div></li>
            <li onClick={() =>go('/my_chat')}><Icon icon="fluent:chat-24-filled"  style={iconStyle}/></li>
            <li onClick={() =>go('/my_page')}><Icon icon="fluent:person-48-filled"  style={iconStyle}/></li>
        </div>
    )

}