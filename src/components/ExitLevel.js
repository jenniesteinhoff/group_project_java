const ButtonExit = ({onClick, label}) => {
    return (
        <button className="exit-btn" onClick={onClick}>{label}</button>
    );
};

export default ButtonExit;