const ReUsableCell = ({onClick, label}) => {
    return (
        <button className="reuse-cell" onClick={onClick}>{label}</button>
    );
};

export default ReUsableCell;