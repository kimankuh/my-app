import React from "react";
import "./Button.scss";

export default function Button({
    children, // 버튼에 들어갈 텍스트
    size = "md", // 버튼 크기(sm, md, lg)
    color = "primary", // 색상(primary, secondary 등)
    onClick, // 클릭 이벤트
    type="default",
    disabled = false
}){
    return (
    <button className={`btn ${type} ${size} ${color}`} onClick={onClick}>{children}</button>
)}

