const ReUsablePopup = ({result, resultText}) => {
    return (
        <div className="reuse-popup">
            <h1>{result}</h1>
            <h2>{resultText}</h2>
            <button className="popup-btn one">Re-start</button>
            <button className="popup-btn two">Menu</button>
        </div>
        
    );
};

export default ReUsablePopup;