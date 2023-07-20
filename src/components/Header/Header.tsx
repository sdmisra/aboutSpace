import React from "react";
import './Header.css'

type HeaderProps = {
  prevPath: string;
  nextPath: string;
  scrollPage: (path:string) => void
}

const Header = (props: HeaderProps) =>{
return (
<header className="app-header">
  <h1>
  Space News
  </h1>
  {props.prevPath?.length > 0 && <button onClick={()=> props.scrollPage(props.prevPath)}>Previous</button>}
  <button onClick={()=>props.scrollPage(props.nextPath)}>More Results</button>
</header>
)
}
export default Header;