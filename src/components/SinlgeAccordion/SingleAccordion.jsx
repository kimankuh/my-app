import { useState } from 'react';
import './SingleAccordion.scss';

export default function SingleAccordion({ items }){
    const [openIndex, setOpenIndex] = useState(null);// 열린 패널 index, 없으면 null
    
    const toggle = (index) => {
        // 이미 열려있으면 닫기
        if(openIndex === index){
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    }

    // console.log('items', items)
    return (
        <div className="accordion">
            {items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                <div key={item.id} className="accordion-item">
                    <button id={`acoordion-${item.id}`} className="accordion-header" aria-expanded={isOpen} onClick={() => toggle(index)}>{item.title}</button>
                    <div className="acoordion-panel" aria-labelledby={`acoordion-${item.id}`} hidden={!isOpen}>{item.content}</div>
                </div>
                );
            })}
        </div>
    );
}