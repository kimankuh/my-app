import React from "react";
import "./Input.scss";

const Input = ({
    label,
    type = "",
    value,
    placeholder = "",
    id,
    className,
    onChange,
    disabled,
    error = "",
}) => {
    const classes = ["input", error && "error", className].filter(Boolean).join(" ");
    return (
        <div className="ui-input">
            {label && <label className="ui-label" htmlFor={id}>{label}</label>}

            <input type={type} id={id} className={classes} value={value} placeholder={placeholder} onChange={onChange} disabled={disabled}  />

            {/* <input type={type} id={id} className={`input ${error ? "error" : ""} ${className || ""}`} value={value} placeholder={placeholder} onChange={onChange} disabled={disabled}  /> */}

            {error && <p className="ui-error">{error}</p>}
        </div>
    );
};

export default Input;