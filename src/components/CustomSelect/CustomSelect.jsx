import React from "react";
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
    onChange,
    className,
    error,
}) => {
    return (
        <div className={`ui-select-wrap ${error ? "error": ""} ${disabled ? "disabled" : ""}`}>
            {label && <label className="ui-label">{label}</label>}

            {/* custom select */}
            <div className="ui-custom-select">
                <span>{placeholder}</span>
                <span className={`select-arrow ${open ? "open" : ""}`}>▼</span>
            </div>

            {/* custom option */}
            <div className="ui-custom-options">
                {options.map((opt) => {
                    return (
                        <div key={opt.value} className={`ui-custom-option ${opt.value === value ? "selected" : ""}`}>{opt.value}</div>
                    )
                })}
            </div>

            {/* select */}
            <select id={id} title={title}>
                <option>{placeholder}</option>
                {options.map((opt) => {
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