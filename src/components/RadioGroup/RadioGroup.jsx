import { useState } from "react";
import './RadioGroup.scss';

export default function RadioGroup ({
    name,
    options,
    value,// 체크된 요소(부모의 state)
    onChange,
}){
    return (
        <div role="radiogroup">
            {options.map((option) => (// 리턴 구문 영역이라 형제요소를 나란히 리턴하면 안됨. so, label안에 input넣기
                <label key={option.value}>
                    <input key={option.value} type="radio" name={name} value={option.value} 
                    checked={value === option.value}// 1. 현재 선택값과 비교해서 체크 여부 결정
                    onChange={(e) => onChange(e.target.value)}// 2. 선택이 바뀌면 부모에게 값 전달
                    />
                    {option.label}
                </label>
            ))}
        </div>
    );
}