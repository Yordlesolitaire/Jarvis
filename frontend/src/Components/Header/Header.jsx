import { useDevice } from "../../Functions/useDevice"
import style from "./Header.module.css"

export default function Header(){
    const { mobile, orientation } = useDevice();
    return(
        <>
            {mobile ? <Mobile/> : <Desktop/>}
        </> 
    )
}


function Mobile(){
    return(
        <header className={style.Header}>
            <h1>Jarvis</h1>
        </header>
    )
}



function Desktop(){
    return(
        <header className={style.Header}>
            <h1>Jarvis</h1>
        </header>
    )
}