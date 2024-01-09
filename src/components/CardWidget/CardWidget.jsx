/* eslint-disable react/prop-types */
import Icon from "../Icon/Icon"
import "./CardWidget.css"

function CardWidget({ title, amount, orders, isActive, subTitle, subText }) {
  return (
    <div className={`${isActive ? "Active" : ""}OverviewWidget`}>
      <div className="WidgetTitle">
        {title && <p>{title}</p>}
        <div className="NavFlex1Question">
          <Icon name="help-icon" className={`${isActive ? "icon-color-white" : ""}`} />
        </div>
      </div>
      <div className="WidgetAmount">
        {amount && <p className="Amount">{amount}</p>}
        {orders && (
          <div className="SecondaryClick">
            {orders && <p className={`${isActive ? "orders" : "activeOrders"}`}>{orders} orders</p>}
            <div className="WidgetChevronIcon">
              <Icon name="right-arrow-icon" className={`${isActive ? "icon-color-white" : ""}`} />
            </div>
          </div>
        )}
      </div>
      {isActive && <div className="SubSection">
        <p>{subTitle}:</p>
        <p className="text">{subText}</p>
      </div>}
    </div>
  );
}

export default CardWidget;