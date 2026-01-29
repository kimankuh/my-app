import { useState } from 'react';
import './App.scss';
import Button from "./components/Button/Button";
import Input from './components/Input';// 해당 폴더에 index파일(js, jsx, tsx)있는 경우
import Textarea from './components/Textarea/Textarea';
import Select from './components/Select';
import CustomSelect from './components/CustomSelect/CustomSelect';
import Checkbox from './components/Checkbox/Checkbox';
import CustomCheckbox from './components/CustomCheckbox/CustomCheckbox';


function App() {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [contry, setContry] = useState("");
    const [fruit, setFruit] = useState("");
    const contryOptions = [
        {id:1, value:"kr", label: "한국"},
        {id:2, value:"us", label: "미국"},
        {id:3, value:"jp", label: "일본"},
        {id:4, value:"uk", label: "영국"},
    ];
    const selectedOption = contryOptions.find(opt => opt.value === contry)
    const checkboxOptions = [
        {value: "html", label: "HTML"},
        {value: "css", label: "CSS"},
        {value: "react", label: "React"},
    ];
    const [checked, setChecked] = useState({
        agree: false,
        agree2: false,
    });


    return (
        <div className="App">
            <h2 className="title-h2">Checkbox(custom)</h2>
            <div className="con-box">
                <CustomCheckbox id="CustomCheckbox_01" label="동의합니다" checked={checked.agree} onChange={setChecked} />
                <CustomCheckbox id="CustomCheckbox_02" label="동의합니다" checked={checked.agree2} onChange={setChecked} disabled="disabled" />
            </div>

            <h2 className="title-h2">Checkbox</h2>
            <div className="con-box">
                <Checkbox id="checkbox_01" />
                <Checkbox id="checkbox_02" checked />
                <Checkbox id="checkbox_02" disabled />
                <Checkbox id="checkbox_03" checked disabled />
            </div>

            <h2 className="title-h2">CustomSelect</h2>
            <div className="con-box" style={{margin:"0 auto", padding:"0 50px 50px", width:"300px"}}>
                <CustomSelect id="customSelectID" label="국가 선택" value={contry} options={contryOptions} placeholder="선택하세요~!!" onChange={setContry}
                    // onChange={(e) => {setContry(e.target.value)} => 이벤트를 넘기는 case. 커스텀 폼요소에선 비추
                    // console.log(e.target.value)
                error={!contry && "[에러메세지]국가를 선택하세요!!!"} />
                <p>선택값: {selectedOption ? selectedOption.label : ''}</p>
            </div>

            <h2 className="title-h2">Select</h2>
            <div className="con-box" style={{margin:"0 auto", padding:"0 50px 50px", width:"300px"}}>
                <Select id="selectID" label="과일 선택" value={fruit} onChange={(e) => {setFruit(e.target.value)
                    // console.log(e.target.value)
                }} error={!fruit && "과일을 선택하세요!!!"} />
                <p>선택값: {fruit}</p>
            </div>  
            
            <h2 className="title-h2">Textarea</h2>
            <div className="con-box" style={{margin:"0 auto", padding:"0 50px 50px", width:"300px"}}>
                <Textarea id="textareaName" label="설명" value={desc} onChange={(e) => {setDesc(e.target.value)}} />
            </div>        

            <h2 className="title-h2">Input</h2>
            <div className="con-box" style={{margin:"0 auto", padding:"0 50px 50px", width:"300px"}}>
                <Input type="text" id="inputName" className="dd" title="이름?" label="이름" value={name} placeholder="이름을 입력하세요" onChange={(e) => {setName(e.target.value)}} />
                <Button variant="primary">저장</Button>
                <p>입력값: {name}</p>
            </div>

            <h2 className="title-h2">Button</h2>
            <div className="con-box">
                <Button>기본 버튼</Button>
                <Button size="sm" color="secondary">작은 버튼</Button>
                <Button size="lg">큰 버튼</Button>
                <Button><span>큰 버튼</span></Button>
                <Button>
                    <strong>저장</strong>
                    <span className='desc'>임시 저장</span>
                </Button>
            </div>
        </div>
    );
}

export default App;
