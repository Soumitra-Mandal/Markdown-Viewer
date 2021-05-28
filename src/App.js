import './App.css';
import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown'


function App() {

const [txt,setTxt] = useState('');

const handleChange = (e) => {
 //var markdown = marked(e.target.value);
 setTxt(e.target.value);
 
}

  return (
    <div className="App">
    <div id='editor' className='column'>
      <h1 className='header'>Markdown</h1>
    <textarea rows="40" cols="90" value={txt} onChange={handleChange}></textarea>
    </div>
    <div id='display' className='column'>
      <h1 className='header'>Display</h1>
      <div id='disp'>
      <ReactMarkdown>{txt}</ReactMarkdown>
      </div>
    </div>
    </div>
  );
}

export default App;
