import "./CustomCheckboxGroup.scss";

export default function CustomCheckboxGroup({
    options,// ==> 화면에 뿌려주는 용도
    value,// 체크된 value 배열(부모에서 내려옴) ==> 선택한 요소를 저장하는 용도. 체크박스는 여러개 선택할 수 있으니 배열
    onChange,// 체크 변경 시 부모에게 알리는 함수(state 업데잇)
    // checked,
}){
    
    // 반복해서 체크박스를 만드는 방법
    // - 부모에서 받은 options를 이용해 반복문으로 ui를 그림
    // - 클릭 여부는 value에 추가/삭제

    // 부모에 넘길 값 설정
    function handleClick(optionValue){
        // onChange(!checked); <== 단일 체크박스 사용시에만

        if(value.includes(optionValue)){
            // props으로 받은 value에서 클릭해서 들어온 optionValue와 같은 것이 있다면 true
            // 즉, v와 optionValue가 같지 않아야 true니까. 같은게 들어오면 false
            // filter는 true인 것만 결과배열에 추가함
            onChange(value.filter(v => v !== optionValue));// ==> handleClick함수가 반복될 때마다 결과배열에 추가. value에 3개의 값이 있다면 3번 실행
        } else {
            // 선택 안된거면 체크, value에 추가
            onChange([...value, optionValue]);
        }
        console.log('optionValue', value)
    }
    return (
        <div className="checkbox-group">            
            {options.map(option => {
                // props으로 받은 value에 들어있는 값을 비교하여 true/false
                const checked = value.includes(option.value);
                // 위 checked 변수의 true/false에 따라 checked 클래스 추가할지 판단
                // 각 체크박스마다 판단하고 클래스를 넣어줘야하니 반복문 내부에 위치함
                const classes = ['ui-checkbox', checked && 'checked'].filter(Boolean).join(' ');
                return (
                    <button key={option.value} type="button" className={classes} onClick={() => handleClick(option.value)}>{option.label}</button>
                );
            })}
        </div>
    );
}