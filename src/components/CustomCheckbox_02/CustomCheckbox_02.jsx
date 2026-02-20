import "./CustomCheckbox_02.scss";

export default function CustomCheckbox_02({
    label,
    checked,
    onChange,
}){
    // input change 이벤트 처리
    const handleClick = () => {
        onChange(!checked);// 클릭할 때마다 상태 바꿔줘~ 부모에 요청 ==> true/false만 체크하는 건 단일 체크박스(토글)용
        console.log('클릭???', checked)
    }

    const classes = ['custom-toggle-checkbox', checked && 'checked'].filter(Boolean).join(' ');

    return (
        <button type="button" className={classes} onClick={handleClick}>
            <span className="box"></span>
            <span>{label}</span>
        </button>
    );
}