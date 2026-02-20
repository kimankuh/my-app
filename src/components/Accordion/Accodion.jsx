import { useState } from "react";
import './Accodion.scss';

export default function Accordion ({ items }){
    // 열려있는 index만 저장
    const [openIndexes, setOpenIndexes] = useState([]);

    // title 클릭시 패널들의 열림/닫힘    
    const toggle = (index) => {// 배열에 추가할 index
        // 클릭하면 열려있는 패널들의 상태를 업데이트 시켜야함
        setOpenIndexes((prev) => {
            // 상태 업테이트를 어떻게 시킬거냐면. 조건이 있어
            if(prev.includes(index)){// 클릭한 패널의 index가 이미 있으면
                return prev.filter((i) => i !== index);// 배열에서 제거
            }
        });

    }
    return (
        <div key={items.id} className="accordion">
            {items.map((item, index) => {
            })}
        </div>
    )
}