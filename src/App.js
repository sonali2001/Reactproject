import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import TextEditor from "./components/Texteditor";
import List from "./components/list";
import { Scrollbars } from 'react-custom-scrollbars';


function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <td>
          <Scrollbars style={{ width: 320, height: 600 }}>
            <div className="body">
            <div className="list" style={{ color:"black"}}>
              <List/>
            </div>
            <div className="list" style={{color:"black" }}>
              <List/>
            </div>
            <div className="list" style={{color:"black" }}>
              <List/>
            </div>
            <div className="list" style={{color:"black"}}>
              <List/>
            </div>
            <div className="list" style={{color:"black" }}>
              <List/>
            </div>
            </div>
            </Scrollbars>
             
          </td>
          <td>
          <Scrollbars style={{ width: 900, height: 700 }}>
            <div className="body">
              <div className="editor" style={{height:"30%",width:'10px',color:"blue"}}>
                <TextEditor />
              </div>
              <div className="editor" style={{height:"30%",width:"10px",color:"blue"}}>
                <TextEditor />
              </div>
              <div className="editor" style={{height:"30%",width:"10px",color:"blue"}}>
                <TextEditor />
              </div>
              <div className="editor" style={{height:"30%",width:"10px",color:"blue"}}>
                <TextEditor />
              </div>
              <div className="editor" style={{height:"30%",width:"10px",color:"blue"}}>
                <TextEditor />
              </div>
            </div>
            </Scrollbars>
          </td>
        </tr>
      </table>
        
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Text Editor</h1>
      </header> */}
    </div>
  );
}

export default App;
