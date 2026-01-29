import React from "react";
import {useState, useRef, useEffect} from "react";
import "./CustomSelect.scss";

const CustomSelect = ({
    options,
    value,// 현재 선택된 값(부모)
    onChange,// 값 변경 함수(부모 useState)
    placeholder = "선택하세요",
    name,
    disabled = false,
    error,
}) => {
    // ## 순서 ##
    // 0) 마크업 먼저
    // 1) 드롭다운이 열려있는지 상태 만들기
    // 2) 셀렉트 바깥 클릭 감지를 위한 ref 생성
    // 3) 현재 선택된 option 객체 찾기
    // 4) 클래스 정리(에러/비활성화 처리)
    // 5) 셀렉트 클릭(열고/닫기)
    // 6) 옵션 클릭(값 변경 + 닫기)
    // 7) 바깥 클릭 시 닫히도록 처리 => DOM 이벤트라 useEffect 사용
    // 8) 화면 렌더링
    //      8-1) 선택된 값 표시 영역
    //      8-2) 드롭다운 옵션 목록
    //      8-3) 폼 전송용 select
    //      8-4) 에러 메세지



    // 1) 드롭다운이 열려있는지 상태 만들기
    const [open, setOpen] = useState(false);

    // 2) 셀렉트 바깥 클릭 감지를 위한 ref 생성
        // 커스텀 셀렉트 전체를 감싸고 있는 DOM요소
        // 화면에 표시되지 않고, 값이 바뀌어도 렌더링 필요없는 경우. 
        // DOM을 직접 잡아야 하나? 타이머, 포커스, 영역 체크인가?
    const selectRef = useRef(null);// selectRef.current

    // useEffect() => useEffect는 DOM이 있어야 하고 useRef는 그 DOM 가리킴.
        // 렌더링이 끝난 뒤에 실행되어야 하는 코드를 넣는 곳. 
        // 의존성 배열이 있어 실행 시점을 조절함.(최초1번 실행, 특정 값이 바뀔때만 실행 등), 
        // 클린업 함수? => 셀렉트가 화면에 생기면 문서 전체 클릭을 감시하다가 사라지면 감시를 중단함.
        // 이벤트 리스너 등록, API호출, DOM조장, 외부 라이브러리 연동, 타이머/인터벌, 특정 state 변경 감지
    // ===> 정리
    // useState : 화면에 보이는 상태
    // useRef : 화면과 무관한 값 / DOM
    // useEffect : 렌더링 후 해야 할 일

    // 3) 현재 선택된 option 객체 찾기. 
        // 선택한 value는 "KR"과 같은 값을 부모에서 전달받은 options 배열에서 찾는다
        // div에 표시될 선택된 값. 배열.find() => 조건에 맞는 첫번재 요소를 찾는 함수        
    const selected = options.find(opt => opt.value === value);

    // 4) 클래스 정리(에러/비활성화 처리)
        // A && B => A가 true이면 B를 반환, false이면 false를 반환
        // filter(Boolean) => falsy값들(false, undefined, 0, '')을 제거하고 truthy만 남길때
        // join(' ') => 클래스
    const classes = ['ui-custom-select', disabled && 'disabled', error && 'error'].filter(Boolean).join(' ');

    // 5) 셀렉트 클릭(열고/닫기)
    const toggleOpen = () => {
        if(disabled) return;
        setOpen(prev => !prev);// 상태를 토글시켜 업데이트함
        // prev => !prev : 화살표 함수의 축약형
            // (prev) => {
            //     return !prev;
            // }
        // setOpen(!prev) 이건 안돼? 왜 함수를 넣음? 
            // 함수형 업데이트라고 표현
            // 함수형으로 상태를 바꾸줘야 연달아 호출되어도 바로 상태가 토글됨
            // 빠르게 클릭해도, 다른 상태변경돠 겹쳐도, 이벤트 중첩돼도 상태 꼬이지 않음
        // 함수형 업데이트 쓰는 경우
            // 이전 값에 의존하는 경우, 열기/닫기(toggle), 카운터 증가/감소, 배열 push/filter, 객체 상테 병합
    };

    // 6) 옵션 클릭(값 변경 + 닫기)
    const handleSelect = (option) => {
        onChange(option.value);// 부모의 option.value(문자열)로 state에 값 변경 요청 => 데이터 변경
        setOpen(false);// 드롭다운 닫기 => UI 변경

        console.log('클릭')
    }

    // 7) 바깥 클릭 시 닫히도록 처리 => DOM 이벤트라 useEffect 사용
    useEffect(() => {
        const handleClickOutside = (e) => {
            if(selectRef.current && !selectRef.current.contains(e.target)){
                // selectRef.current : 아직 렌더가 안되면 null일 수 있음. 그래서 DOM이 존재하는지 체크
                // contains() : selectRef()안에 '포함되어 있나?' 즉, !contains는 '포함 안되어있지?'
                // 안에서 클릭 true, 바깥에서 클릭 false
                // ==> 셀렉트 바깥을 클릭 감지

                setOpen(false);// 셀렉트 열려있는데 닫아라

                // console.log('바깥쪽 클릭')
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        // 컴포넌트 사라질 때 이벤트 제거
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        // 8) 화면 렌더링
        // <div className={`ui-custom-select ${disabled ? "disabled" : ""} ${error ? "error" : ""}`}>
        <div className={classes} ref={selectRef}>
            
            {/* 8-1) 선택된 값 표시 영역 */}
            <div className="select-trigger" onClick={toggleOpen}>
                {selected ? selected.label : placeholder}
            </div>

            {/* 8-2) 드롭다운 옵션 목록 */}
            {open && (// open이 true면 jsx를 렌더링. false값이면 리액트는 무시함(표시 안됨)
                <ul className="select-options">
                    {options.map(opt => (
                        <li key={opt.id} className={opt.value === value ? 'selected' : ''} onClick={() => handleSelect(opt)}>{opt.label}</li>
                    ))}
                </ul> 
            )}

            {/* 8-3) 폼 전송용 select */}
            <select value={value} onChange={e => onChange(e.target.value)} hidden>
                {/* <option value="">{placeholder}</option> */}
                {options.map(opt => (// 화살표 함수에서 소괄호()는 return 영역이 됨
                    <option key={opt.id} value={opt.value}>{opt.label}</option>
                ))}
            </select>

            {/* 8-4) 에러 메세지 */}
            {error && <p className="ui-error">{error}</p>}
        </div>
    );
}

export default CustomSelect;