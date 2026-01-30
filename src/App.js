import { useState } from 'react';
import './App.scss';
import Button from "./components/Button/Button";
import Input from './components/Input';// 해당 폴더에 index파일(js, jsx, tsx)있는 경우
import Textarea from './components/Textarea/Textarea';
import Select from './components/Select';
import CustomSelect from './components/CustomSelect/CustomSelect';
import Checkbox from './components/Checkbox/Checkbox';
import CustomCheckbox from './components/CustomCheckbox/CustomCheckbox';
import CustomCheckbox_02 from './components/CustomCheckbox_02/CustomCheckbox_02';


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
    const [checked, setChecked] = useState({// 체크박스가 여러개인 경우, 객체 형태로 관리. 
        agree: false,// 체크 상태를 state를 통해 알게됨(조건문 사용시)
        agree2: false,
        checkedAgree: false,// 초기값은 여기서 설정
    });

    function handleChange(key){// handleChange의 매개변수key를 받고 함수를 하나 더 실행해라
        return function(value) {
            setChecked(prev => ({// 소괄호를 한 번 더 싸준건 "객체"를 자동 리턴한다는 의미. 이건 함수 블록 아님. 이 checked라는 state는 객체니까
                ...prev,// 1. 객체를 복사하고 
                [key]: value,// 2. 이 추가된 요소랑 합체한다. 대괄호는 객체의 key를 변수값으로 쓰겠다는 뜻. 계산된 프로퍼티 이름(?)
            }));
        };
    }


    return (
        <div className="App">
            <h2 className="title-h2">Checkbox - button used</h2>
            <div className="con-box">
                <CustomCheckbox_02 label="동의" checked={checked.checkedAgree} onChange={handleChange("checkedAgree")} />
                {/* state로 상태를 업데이트 시키고 업데이트 된 값을 checked에 가져옴*/}
                <p>체크 상태 : {checked.checkedAgree ? 'true' : 'false'}</p>
            </div>

            <h2 className="title-h2">Checkbox(custom)</h2>
            <div className="con-box">
                <CustomCheckbox id="CustomCheckbox_01" label="동의합니다" checked={checked.agree} onChange={setChecked} />
                <CustomCheckbox id="CustomCheckbox_02" label="동의합니다" checked={checked.agree2} onChange={setChecked} disabled="disabled" />
            </div>

            <h2 className="title-h2">Checkbox - original</h2>
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
