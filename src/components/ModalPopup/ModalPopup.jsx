import { useEffect, useState } from 'react';
import './ModalPopup.scss';

export default function ModalPopup ({
    isOpen,// 팝업이 열렸는지
    onClose,//버튼 클릭시
    children,// 부모가 컴포넌트 태그 사이에 넣은 내용 전체
}){
    // ESC 키로 닫기
    // useEffect : 데이터를 가져오거나 DOM을 조작하는 등 사이드 이펙트를 처리하는 훅
    useEffect(() => {
        const handleEsc = (e) => {
            if(e.key === "Escape"){
                onClose();
            }           
        }

        // isOpen이 true일 때, keydown이 있따면 handleEsc 호출
        if(isOpen){
            window.addEventListener("keydown", handleEsc);
        }

        // useEffect의 return
        // 리턴 내부에 있는 코드는 모달 닫힘(언마운트) 시 실행 =>  즉, 정리할 타이밍에 자동으로 실행
        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen, onClose]);// 빈 배열은 마운트시 1회 실행, 배열에 값이 있다면 값이 변경될때마다 실행

    // 부모의 팝업 버튼 클릭할 때만 isOpen은 true
    // console.log("모달 : ", isOpen)

    // 자식이 렌더 여부 결정 => 조건이 false면 return 이하 부분을 렌더링하지 않음
    // 닫기 시 렌더링을 막기위해 작성한 조건문
    // 부모에서 렌더 여부를 결정하려면 : {isOpen && <ModalPopup />}
    if(!isOpen) return null; 

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" role="dialog" aria-modal="true" onClick={(e) => {e.stopPropagation()}}>
                <button type="button" className="modal-close" aria-label="닫기" onClick={onClose}>X</button>
                {children}                
            </div>
        </div>
    )
}