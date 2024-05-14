const ButtonExit = ({onClick, label}) => {
    return (
        <button className="btn-exit" onClick={onClick}>{label}</button>
    );
};

export default ButtonExit;