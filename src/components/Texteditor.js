import React,{ Component } from 'react';
import {EditorState} from "draft-js";
import {Editor} from "react-draft-wysiwyg"
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


export default class TextEditor extends Component{
    constructor(props){
      super(props);
      this.state = {
        editorState: EditorState.createEmpty(),
      };
    }
  
    onEditorStateChange = (editorState) => {
      // console.log(editorState)
      this.setState({
        editorState,
      });
    };
  
    render(){
      const { editorState } = this.state;
      return <div className='editor'>
        <Editor
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          editorState={editorState}
          onEditorStateChange={this.onEditorStateChange}    
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
          }}
        />
      </div>
    }
  }

  function uploadImageCallBack(file) {
    return new Promise(
      (resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.imgur.com/3/image');
        xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
        const data = new FormData();
        data.append('image', file);
        xhr.send(data);
        xhr.addEventListener('load', () => {
          const response = JSON.parse(xhr.responseText);
          resolve(response);
        });
        xhr.addEventListener('error', () => {
          const error = JSON.parse(xhr.responseText);
          reject(error);
        });
      }
    );
  }
  