import React from "react";
import "./Select.scss";

const Select = ({
    label,
    id,
    title,
    className,
    value,
    options =  [
        {value:"banana", label: "바나나"},
        {value:"apple", label: "사과"},
        {value:"peach", label: "복숭아"},
    ],    
    placeholder = "선택하세요~~",
    error = "",
    disabled = false,
    onChange,
}) => {
    const classes = ["select", error && "error", className].filter(Boolean).join(" ");
    return (
        <div className="ui-select">
            {label && <label className="ui-label">{label}</label>}

            <select id={id} title={title} className={classes} disabled={disabled} onChange={onChange}>
                <option>{placeholder}</option>
                {options.map((opt) => {
                    // console.log('opt', opt);
                    return (
                        <option key={opt.value} value={opt.label}>{/* map, for문 등 반복되는 요소에 key 속성 필수 */}
                            {opt.label}
                        </option>
                        )
                    })
                }

                {/* {options.map((opt) => (// {}괄호가 아닌 이유. return구문 없이 바로 리턴할 수 있음.
                    <option key={opt.value} value={opt.label}>
                        {opt.label}
                    </option>
                ))} */}
            </select>

            {error && <p className="ui-error">{error}</p>}
        </div>
    );
}

export default Select;