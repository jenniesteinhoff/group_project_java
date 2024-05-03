import UserName from "./UserName";
import ReUsableButton from "./ReusableButton";


const Home = () => {
    return (
        <div className="container">
            <UserName userId="Player" />
            <h1>Home</h1>
            <h3>Test</h3>
            <div className="menuOptions">
                <ReUsableButton>Start game</ReUsableButton>
                <ReUsableButton>Credits</ReUsableButton>
                <ReUsableButton>Quit</ReUsableButton>                
            </div>

        </div>
    );
};

export default Home;