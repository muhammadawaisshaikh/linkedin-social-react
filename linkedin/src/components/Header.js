import "./header.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header-wrapper">
          <div className="left-section">
            <img className="linkedin-logo" src="linkedin-icon.svg"></img>
            <input
              type="text"
              className="search-box"
              placeholder="Search"
            ></input>
          </div>
          <div className="middle-section">
            <ul className="navbar-icons">
              <li className="top-icon home">
                <a>
                  <img
                    className="icon"
                    style={{ height: "30px" }}
                    alt="Home icon"
                    src="home.svg"
                  ></img>
                  <label> Home </label>
                </a>
              </li>

              <li className="top-icon network">
                <a>
                  <img
                    className="icon"
                    style={{ height: "30px" }}
                    alt="My Network icon"
                    src="multiple-users.svg"
                  ></img>
                  <label> My Network </label>
                </a>
              </li>
              <li className="top-icon jobs">
                <a>
                  <img
                    className="icon"
                    alt="Jobs icon"
                    src="suitcase.svg"
                  ></img>
                  <label> Jobs </label>
                </a>
              </li>
              <li className="top-icon messaging">
                <a>
                  <img
                    className="icon"
                    alt="Messaging icon"
                    src="chat-square.svg"
                  ></img>
                  <label> Messaging </label>
                </a>
              </li>
              <li className="top-icon notifications">
                <a>
                  <img
                    className="icon"
                    alt="Notifications icon"
                    src="notification-icon.svg"
                  ></img>
                  <label> Notifications </label>
                </a>
              </li>
              <li className="top-icon me">
                <a>
                  <img
                    alt="Me icon"
                    className="profile-pic"
                    style={{ borderRadius: "50%", height: "30px" }}
                    src="profile_pic.jpeg"
                  ></img>
                  <label> Me </label>
                </a>
              </li>
            </ul>
          </div>
          <div className="right-section">
            <div className="top-icon for-business">
              <a>
                <img
                  className="icon"
                  alt="For-business icon"
                  src="square-grid.svg"
                ></img>
                <label> For Business </label>
              </a>
            </div>
            <div className="top-icon retry-premium">
              <a>
                <img
                  className="icon"
                  alt="retry-premium icon"
                  src="square-button.svg"
                ></img>
                <label> Retry for 0 </label>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
