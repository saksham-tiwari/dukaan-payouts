import Logo from "../../assets/logo.png";
import { sidePanelLinks } from "../../data/SidePanelLinks";
import Icon from "../Icon/Icon";
import "./Sidepanel.css"

// eslint-disable-next-line react/prop-types
function SidePanel({ sidePanelActive }) {
  return (
    <aside className={`SidePanelMain ${sidePanelActive ? 'active' : ''}`}>
      <div className='SidePanel'>
        <div className='SidePanelProfile'>
          <div className='SidePanelProfileFlex'>
            <div className='logo'>
              <img src={Logo} alt='logo' />
            </div>
            <div className='info'>
              <h5>Nishyan</h5>
              <p>Visit store</p>
            </div>
          </div>
          <div>
            <Icon name={'chevron-icon'} />
          </div>
        </div>

        <ul className='SidePanelItemList'>
          {sidePanelLinks.map((item, index) => (
            <li key={index} className={`SidePanelItem ${item.active ? 'ActiveSidePanelItem' : ''}`}>
              <div>
                <Icon name={item.icon} />
              </div>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
        <div className='SidePanelBottonItem'>
          <div>
            <Icon name={'wallet-icon'} />
          </div>
          <div className='SidePanelWallet'>
            <h6>Available credits</h6>
            <p>222.10</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SidePanel;
