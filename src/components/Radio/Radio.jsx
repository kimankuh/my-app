import './Radio.scss';

export default function Radio ({
    id,
    name,
    label,
    disabled,
}){
    return (
        <div className='radio-origin'>
            <input type="radio" id={id} name={name} label={label} disabled={disabled} />
            <label htmlFor={id}>{label}</label>
        </div>
    );
}