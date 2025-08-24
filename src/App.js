import "./App.css";
import ChatgptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png"
import messageicon from "./assets/message.svg"
import home from "./assets/home.svg"
import saved from "./assets/bookmark.svg"
import rocket from "./assets/rocket.svg"
function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            {" "}
            <img src={ChatgptLogo} alt="" className="logo" />{" "}
            <span className="brand"> ChatGpt</span>{" "}
          </div>
          <button className="midBtn">
            {" "}
            <img src={addBtn} alt="" className="addBtn" />
            new chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={ messageicon} alt="" className="queryBtn" /> what is programming?
            </button>
            <button className="query">
              <img src={ messageicon}  alt="" className="queryBtn" />how to study an API?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems"><img src={home} alt="" className="listItemsImg" /> Home</div>
          <div className="listItems"><img src={saved} alt="" className="listItemsImg" /> Saved</div>
          <div className="listItems"><img src={rocket} alt="" className="listItemsImg" /> Upgrade to pro</div>
        </div>
      </div>








      <div className="main"></div>
    </div>
  );
}

export default App;
