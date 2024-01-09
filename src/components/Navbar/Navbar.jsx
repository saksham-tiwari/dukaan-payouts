import Icon from "../Icon/Icon";
import "./Navbar.css"
// eslint-disable-next-line react/prop-types
function Navbar({ setSidePanelActive }) {
  const toggleMenu = () => {
    setSidePanelActive(prev => !prev);
  };
  return (
    <nav>
      <div className="navbar">
        <div className="NavFlex1">
          <div className="NavFlex1Title">
            <p>Payouts</p>
          </div>
          <div className="NavFlex1HIW">
            <div className="NavFlex1Question">
              <Icon name="help-icon" />
            </div>
            <p>How it works</p>
          </div>
        </div>
        <div className="NavFlex2">
          <div className="searchBox">
            <div>
              <Icon name={"search-icon"} />
            </div>
            <input
              type="text"
              placeholder="Search features, tutorials, etc."
            />
          </div>
        </div>
        <div className="NavFlex3">
          <div>
            <Icon name="msg-icon" />
          </div>
          <div className="NavFlex3ChevIcon">
            <Icon name="chev-icon" />
          </div>
        </div>
        <div className="HamburgerMenu" onClick={toggleMenu}>
          <Icon name="menu-icon" className="icon-color-gray" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar