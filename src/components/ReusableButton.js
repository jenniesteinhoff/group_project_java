const ReUsableButton = ({onClick, label}) => {
    return (
        <button className="reuse-btn" onClick={onClick}>{label}</button>
    );
};

export default ReUsableButton;