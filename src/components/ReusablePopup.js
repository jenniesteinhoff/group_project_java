
const ReUsablePopup = ({result, resultText, reset, menu}) => {
    return (
        <div className="reuse-popup">
            <h1>{result}</h1>
            <h2>{resultText}</h2>
            {reset}
            {menu}
        </div>
        
    );
};

export default ReUsablePopup;