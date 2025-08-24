import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop">
            {" "}
            <img src="" alt="" className="logo" />{" "}
            <span className="brand"> ChatGpt</span>{" "}
          </div>
          <button className="modBtn">
            {" "}
            <img src="" alt="" className="addBtn" />
            new chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src="" alt="" className="queryBtn" /> what is programming?
            </button>
            <button className="query">
              <img src="" alt="" className="queryBtn" /> what is programming?
            </button>
          </div>
        </div>
        <div className="lowerSide"></div>
      </div>
      <div className="main"></div>
    </div>
  );
}

export default App;
