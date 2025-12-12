import { useState } from 'react';
import './App.css';
import Button from "./components/Button/Button";
import Input from './components/Input';// 해당 폴더에 index파일(js, jsx, tsx)있는 경우
import Textarea from './components/Textarea/Textarea';
import Select from './components/Select';


function App() {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [contry, setContry] = useState("");
    const contryOptions = [
        {value:"kr", label: "한국"},
        {value:"us", label: "미국"},
        {value:"jp", label: "일본"},
    ];

  return (
    <div className="App">
        <h2>&gt;&gt; Select &lt;&lt;</h2>
        <div style={{padding:"0 50px 50px", width:"300px"}}>
            <Select id="selectID" label="국가 선택" value={contry} options={contryOptions} placeholder="국가를 선택하세요" onChange={(e) => {setContry(e.target.value)
                // console.log(e.target.value)
            }} error={!contry && "국가를 선택하세요!!!"} />
            <p>선택값: {contry}</p>
        </div>  

        <h2>&gt;&gt; Textarea &lt;&lt;</h2>
        <div style={{padding:"0 50px 50px", width:"300px"}}>
            <Textarea id="textareaName" label="설명" value={desc} onChange={(e) => {setDesc(e.target.value)}} />
        </div>        

        <h2>&gt;&gt; Input &lt;&lt;</h2>
        <div style={{padding:"0 50px 50px", width:"300px"}}>
            <Input type="text" id="inputName" className="dd" title="이름?" label="이름" value={name} placeholder="이름을 입력하세요" onChange={(e) => {setName(e.target.value)}} />
            <Button variant="primary">저장</Button>
            <p>입력값: {name}</p>
        </div>

        <h2>&gt;&gt; Button &lt;&lt;</h2>
        <div>
            <Button>기본 버튼</Button>
            <Button size="sm" color="secondary">작은 버튼</Button>
            <Button size="lg">큰 버튼</Button>
        </div>
    </div>
  );
}

export default App;
