import { useEffect, useState } from 'react';
import './App.scss';
import Button from "./components/Button/Button";
import Input from './components/Input';// 해당 폴더에 index파일(js, jsx, tsx)있는 경우
import Textarea from './components/Textarea/Textarea';
import Select from './components/Select';
import CustomSelect from './components/CustomSelect/CustomSelect';
import Checkbox from './components/Checkbox/Checkbox';
import CustomCheckbox from './components/CustomCheckbox/CustomCheckbox';
import CustomCheckbox_02 from './components/CustomCheckbox_02/CustomCheckbox_02';
import CustomCheckboxGroup from './components/CustomCheckboxGroup/CustomCheckboxGroup';
import Radio from './components/Radio/Radio';
import RadioGroup from './components/RadioGroup/RadioGroup';
import Tab from './components/Tab/Tab';
import Accordion from './components/Accordion/Accodion';


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
    const selectedOption = contryOptions.find(opt => opt.value === contry);// opt.value가 contry랑 같은 첫번째 요소를 찾아라
    const checkboxOptions = [
        {value: "html", label: "HTML"},
        {value: "css", label: "CSS"},
        {value: "react", label: "React"},
    ];

    // 체크박스의 state를 객체로 관리하기 ==> 약관에서처럼 개별적으로 체크박스를 그려줘야 하는 경우
    const [checked, setChecked] = useState({// 체크박스가 여러개인 경우, 객체 형태로 관리.
        agree: false,// 체크 상태를 state를 통해 알게됨(조건문 사용시)
        agree2: false,
        checkedAgree: false,// 초기값은 여기서 설정
        checkedAgree2: false,// 초기값은 여기서 설정
    });

    // 함수로 state를 추가해서 사용하는 방법(객체 state) ==> 기존 객체를 복사하고, key 하나만 바꿔라
    // 어떤 key를 바꿀지 먼저 알아야하기 때문에 고차함수를 사용함. 어떤 key를 바꾼다는 건 객체라는 뜻
    // state key를 반환하는 함수
    // 부모 onChange에서 handleChange함수 실행시 key를 주면, 자식에게 넘어갈 때 실행시킬 수 있는(value를 받는) 함수를 하나 줄게
    function handleChange(key){// handleChange의 매개변수key를 받고 함수를 하나 더 실행해라
        return function(value) {// 실제 버튼 클릭시 자식에서 실행되는 함수(true/false)
            setChecked(prev => ({// 소괄호를 한 번 더 싸준건 "객체"를 자동 리턴한다는 의미. 이건 함수 블록 아님. 이 checked라는 state는 객체로 관리되니까.
                ...prev,// 1. 기존 객체를 복사하고 
                [key]: value,// 2. 이 추가된 요소랑 합체한다. 대괄호는 객체의 key를 변수값으로 쓰겠다는 뜻. 계산된 프로퍼티 이름(?)
            }));
        };
    }
    // 위 handleChange 함수의 축약형태
    const handleChange2 = (key) => (value) => {// 두번째 소괄호는 앞의 화살표 함수의 콜백함수
        setChecked(prev => ({// prev = 매개변수. 즉시 리턴해야하니 소괄호 잊지말구
            ...prev,
            [key]: value,
        }));
    }

    // CustomCheckboxGroup
    // 체크박스의 state를 배열로 관리하기 ==> 체크한 건 배열에 추가하고 해제한 건 배열에서 삭제
    const [checkedArray, setCheckedArray] = useState(['html']);// 초기값

    const [radigoGroup, setRadioGroup] = useState('us');

    // 콘솔 찍어보자 => radigoGroup 값이 바뀔 때만(추천)
    // 의존성 배열이 바뀔 때만 실행
    // 배열이 비어있으면 컴포넌트가 처음 마운트 될 때만 실행(API 처음 호출할 때 많이 씀)
    // 배열이 아예 없다면. 렌더마다 실행(무한루프 위험)
    useEffect(() => {
        console.log('radigoGroup : ', radigoGroup);

        // 콘솔 찍기
        // API 호출
        // DOM 직접 접근
        // 이벤트 등록
        // localStorage 사용
    }, [radigoGroup]);
    
    // 콘솔 찍어보자 => 렌더링마다(비추)
    // console.log('radigoGroup : ', radigoGroup);
    
    // tab
    const tabData = [
        {
            id: 'tab-01',
            label: 'HTML',
            content: (
                <div>
                    <h2>HTML</h2>
                    <p>HTML에 대한 글임</p>
                </div>
            ),
        },
        {
            id: 'tab-02',
            label: 'CSS',
            content: (
                <div>
                    <h2>CSS</h2>
                    <p>CSS에 대한 글임</p>
                </div>
            ),
        },        
        {
            id: 'tab-03',
            label: 'JS',
            content: (
                <div>
                    <h2>JS</h2>
                    <p>JS에 대한 글임</p>
                </div>
            ),
        },
    ];

    // Accordion
    const accordionData = [
        {
            id: 'acco-item-01',
            title: 'HTML 질문',
            content: (
                <div>
                    <p>HTML 답변 내용입니다.</p>
                    <p>HTML 답변 내용입니다.</p>
                </div>
            )
        },
        {
            id: 'acco-item-02',
            title: 'CSS 질문',
            content: (
                <div>
                    <p>CSS 답변 내용입니다.</p>
                    <p>CSS 답변 내용입니다.</p>
                </div>
            )
        },
        {
            id: 'acco-item-03',
            title: 'JS 질문',
            content: (
                <div>
                    <p>JS 답변 내용입니다.</p>
                    <p>JS 답변 내용입니다.</p>
                </div>
            )
        }
    ];

    return (
        <div className="App">
            <h2 className="title-h2">Accordion</h2>
            <div className="con-box">
                <Accordion items={accordionData} />
            </div>

            <h2 className="title-h2">TAB</h2>
            <div className="con-box">
                <Tab tabs={tabData} />
            </div>
            
            <h2 className="title-h2">RadioGroup</h2>
            <div className="con-box">
                <RadioGroup name="RadioGroup" options={contryOptions} value={radigoGroup} onChange={setRadioGroup} />

                {/* 상태를 기준으로 UI 제어 가능?? */}
                <button onClick={() => console.log('radigoGroup : ', radigoGroup)}>제출</button>
                <p>선택된 값: {radigoGroup}</p>
            </div>

            <h2 className="title-h2">Radio</h2>
            <div className="con-box">
                <Radio id="radio_01" name="originRadio" label="HTML" />
                <Radio id="radio_02" name="originRadio" label="CSS" />
                <Radio id="radio_03" name="originRadio" label="JS" />
            </div>

            <h2 className="title-h2">Checkbox Group</h2>
            <div className="con-box">
                <CustomCheckboxGroup options={checkboxOptions} value={checkedArray} onChange={setCheckedArray} />
            </div>

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
