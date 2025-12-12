import React from "react";
import "./Textarea.scss"

const Textarea = ({
    label,
    id,
    className,
    value,
    placeholder,
    onChange,
    disabled,
    error,
    rows = 4,
}) => {
    const classes = ["textarea", error && "error", className].filter(Boolean).join(" ");// 클래스 미사용시 공백 없애줌
    return (
        <div className="ui-textarea">
            {label && <label className="ui-textarea__label" htmlFor={id}>{label}</label>}
            
            <textarea 
                id={id}
                className={classes}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
                rows={rows}
            />

            {error && <p className="ui-error">{error}</p>}
        </div>
    );
}

export default Textarea;