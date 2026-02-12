import style from "./Header.module.css"
export default function Header(){
    const isElectron = navigator.userAgent.toLowerCase().includes("electron");
    return(
        <header className={style.Header}>
            <button>
                <h1>Jarvis</h1>
            </button>
            {isElectron ?<Controls/> : null}
        </header>
    )
}


function Controls(){
    return(
        <nav>
            <button onClick={() => window.electronAPI.minimize()}>
                <Minimize/>
            </button>

            <button onClick={() => window.electronAPI.maximize()}>
                <Maximize/>
            </button>

            <button onClick={() => window.electronAPI.close()}>
                <Close/>
            </button>
        </nav>
    )
}




function Close(){
    return(
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracurrentcolorerCarrier" stroke-linecurrentcolorap="round" strokeLinejoin="round"></g><g id="SVGRepo_icurrentcoloronCarrier"> <path fillRule="evenodd" currentcolorlip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="currentcolor"></path> </g></svg>
    )
}

function Maximize(){
    return(
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentcolor"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="maximize"> <g> <path d="M3,8V5A2,2,0,0,1,5,3H8" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <path d="M21,16v3a2,2,0,0,1-2,2H16" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <path d="M3,16v3a2,2,0,0,0,2,2H8" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <path d="M21,8V5a2,2,0,0,0-2-2H16" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> </g> </g> </g> </g></svg>
    )
}


function Minimize(){
    return(
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentcolor"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="minimize"> <g> <path d="M8,3V6A2,2,0,0,1,6,8H3" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <path d="M16,21V18a2,2,0,0,1,2-2h3" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <path d="M8,21V18a2,2,0,0,0-2-2H3" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <path d="M16,3V6a2,2,0,0,0,2,2h3" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> </g> </g> </g> </g></svg>
    )
}