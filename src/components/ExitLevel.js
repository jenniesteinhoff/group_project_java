const ButtonExitLevel = ({onClick, label}) => {
    return (
        <button className="exit-btn" onClick={onClick}>{label}</button>
    );
};

export default ButtonExitLevel;