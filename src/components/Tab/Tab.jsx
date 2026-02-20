import { useState } from "react";
import './Tab.scss';

export default function Tab ({ tabs }){
    // 자식이 state를 관리하는 경우 => 열림/닫힘, 탭 내부 상태(active)
    const [activeTab, setActvieTab] = useState(0);// 활성화된 탭 상태. 탭버튼을 클릭하면 그 버튼의 index로 업데잇

    // console.log('tabs', tabs)
    return (
        <div className="tabs">
            {/* 탭 버튼 영역 */}
            <div className="tab-header">
                {tabs.map((tab, index) => {// map 매개변수 : 현재 요소값, 인덱스, 원본 배열
                    const isActive = activeTab === index;// true/false
                    // console.log('isActive', isActive, activeTab);

                    return (
                    <button key={tab.id} type="button" role="tab" id={tab.id} onClick={() => setActvieTab(index)} className={`tab-button ${activeTab === index ? "active" : ""}`} title={isActive ? "선택됨" : undefined}>{tab.label}</button>
                    )
                })}
            </div>

            {/* 탭 컨텐츠 영역 */}
            {/* 액티브 컨텐츠만 보이기 */}
            {/* <div className="tab-panel" aria-hidden={!isActive}>
                {tabs[activeTab].content}
            </div> */}

            {/* map으로 모두 노출 */}
            {tabs.map((tab, index) => {
                const isActive = activeTab === index;
                // console.log('activeTab : ', activeTab)
                return(
                <div key={tab.id} role="tabpanel" className="tab-panel" aria-labeledby={tab.id} aria-hidden={!isActive} hidden={!isActive}>{tab.content}</div>
                )
            })}
        </div>
    )
}