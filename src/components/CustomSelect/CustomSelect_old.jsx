import React from "react";
import {useState} from "react";
import "./CustomSelect";

const CustomSelect = ({
    label,
    id,
    title,
    value,
    options = [// 임시 데이터
        {id:1, label:'banana', value:'바나나'},
        {id:2, label:'apple', value:'사과'},
        {id:3, label:'peach', value:'복숭아'},
    ],
    placeholder = "선택해 주세요",
    onChange,// 진짜 이벤트가 아니라 부모가 내려준 콜백 함수. 컴포넌트에 사용되는 경우 prop중에 하나일 뿐.
    className,
    disabled = false,
    error,
}) => {
    const selectedValue = options.find((opt) => opt.value === value);// 선택된 value
    const [open, setOpen] = useState(false);// select 열림/닫힘
    const classes = ['ui-select-wrap', error && 'error', disabled && 'disabled'].filter(Boolean).join(" ");
    // 부모에 error 프롭이 있다면 , disabled 프롭이 있다면 클래스 추가됨
    // .filter(Boolean) => false, null, undefined, "", 0 => 이런 빈 값들이 있다면 제거해라
    // join(" ") => 클래스 사이사이 공백 추가
    const customOptionSelect = (val) => {

    }
    console.log('open', open);
    return (
        <div className={classes}>
            {label && <label className="ui-label">{label}</label>}

            {/* custom select */}
            <div className="ui-custom-select" onClick={() => !disabled && setOpen(!open)}>
                <span>{selectedValue ? selectedValue.value : placeholder}</span>
                <span className={`select-arrow ${open ? "open" : ""}`}>▼</span>
            </div>

            {/* custom option */}
            <div className="ui-custom-options">
                {options.map((opt) => {
                    // console.log('opt', opt)
                    return (
                        <div key={opt.value} className={`ui-custom-option ${opt.value === value ? "selected" : ""}`} onClick={() => customOptionSelect(opt.value)}>
                            {opt.value}
                        </div>
                    )
                })}
            </div>

            {/* select */}
            <select id={id} title={title}>
                <option>{placeholder}</option>
                {options.map((opt) => {
                    // console.log('opt2', opt)
                    return (
                    <option key={opt.id} value={opt.label}>{opt.value}</option>
                    )
                })}
            </select>

            {error && <p className="ui-error">{error}</p>}
        </div>
    );
}

export default CustomSelect;