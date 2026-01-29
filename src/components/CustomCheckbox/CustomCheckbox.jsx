import "./CustomCheckbox.scss";

export default function CustomCheckbox ({
    id,
    label,
    checked,
    onChange,
    disabled,
}){
    // input change 이벤트 처리
    const handleChange = (e) => {
        onChange(e.target.checked);
    }

    return (
        <div className={`custom-checkbox ${disabled ? "disabled" : ""}`}>
            {/* 실제 상태를 가진 input - 바뀌지 않는 건 type, 그 외엔 props로 받기 */}
            <input type="checkbox" id={id} checked={checked} onChange={handleChange} disabled={disabled} />

            {/* 클릭용 label + 커스텀 UI */}
            <label htmlFor={id}>
                <span className="box"></span>
                <span className="label-text">{label}</span>
            </label>
        </div>
    );
}