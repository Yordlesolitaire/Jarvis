import React from "react";
import Header from "./Components/Header/Header";
import { Widgets } from "./Components/widgets/widgets";
import "./style.css"


function App() {
  const widgets = Widgets()
  return (
    <>
    <Header/>
      <div className="content">
        {/* {Array.from({length: 100}, (_, i) => {return <div key={i}></div>;})} */}
        {widgets.map((item, index) => (
          <React.Fragment key={index}>{item}</React.Fragment>
        ))}
      </div>
    </>
  );
}

export default App;
