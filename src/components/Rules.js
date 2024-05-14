import "./Rules.css"


const Rules = () => {
  const handleGoBack = () => {
    window.history.back(); // Navigate to the previous page
  };
    return (
    <div>
      
      <div className="rulesbox">
        <div className="rulescontainer">
          <h2>Rules</h2>
          <p>
            In Minesweeper, your mission is to navigate a grid filled with
            hidden mine and uncover all the safe blocks without detonating the
            bomb. As you click on individual blocks, you'll reveal what is
            underneath the block. If you click on a block containing a mine,
            it'll explode, ending your game. To win, successfully reveal all
            the safe blocks without triggering any explosion.
          </p>
          <p>Happy Playing!</p>
        </div>
        <button onClick={handleGoBack}>Go back!</button>
      </div>
    </div>
  );
};

export default Rules;