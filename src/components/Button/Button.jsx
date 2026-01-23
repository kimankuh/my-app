import React from "react";
import "./Button.scss";

export default function Button({
    children, // 버튼에 들어갈 텍스트. 'children'은 React에서 약속된 prop명. 문자열, jsx 둘 다 가능. 닫는 태그가 있는 요소에는 children이 자동제공됨. 태그 사이에 들어가는 텍스트에 모두 해당.
    size = "md", // 버튼 크기(sm, md, lg)
    color = "primary", // 색상(primary, secondary 등)
    onClick, // 클릭 이벤트
    type="default",
    disabled = false
}){
    return (
    <button className={`btn ${type} ${size} ${color}`} onClick={onClick}>{children}</button>
)}

