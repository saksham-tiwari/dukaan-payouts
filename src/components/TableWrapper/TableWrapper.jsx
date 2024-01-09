import { tableData } from "../../data/TableData";
import Icon from "../Icon/Icon";
import Table from "../Table/Table";
import "./TableWrapper.css"

function TableWrapper() {
  return (
    <section className="TableWrapper">
      <div className="TableHeader">Transactions | This Month</div>
      <div className="TableWrapperButtons">
        <button className="TableWrapperPayoutBtn">Payouts (22)</button>
        <button className="TableWrapperRefundBtn">Refunds (6)</button>
      </div>

      <div className="TableContainer">
        <div className="TableHeadRow">
          <div className="TableHeadSearch">
            <Icon name="search-icon" />
            <input type="text" placeholder="Order ID or transaction ID" />
          </div>
          <div className="TableHeadFilters">
            <div className="TableHeadSortFilter">
              Sort{" "}
              <Icon name="sort-icon" />
            </div>
            <div>
              <Icon name="download-icon" />
            </div>
          </div>
        </div>

        <Table data={tableData} />
      </div>
    </section>
  );
}

export default TableWrapper
