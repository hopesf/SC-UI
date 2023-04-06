export default function Button({ onClick, name, disabled, className }) {
    return <button onClick={onClick} disabled={disabled} className={className}>{name}</button>;
}