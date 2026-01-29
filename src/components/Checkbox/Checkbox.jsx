import "./Checkbox.scss";

export default function Checkbox({
    id,
    checked,
    disabled,
}){
    return (
        <div>
            <input type="checkbox" id={id} checked={checked} disabled={disabled} />
            <label htmlFor={id}>체크박스</label>
        </div>
    );
}