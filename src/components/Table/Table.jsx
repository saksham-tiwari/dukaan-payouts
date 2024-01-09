/* eslint-disable react/prop-types */
import "./Table.css"

const Table = ({ data }) => {
  const { columns, rows } = data;

  return (
    <div className="TableMain">
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {columns.map((column, colIndex) => (
                <td key={colIndex} className={`col-${column.toLowerCase().replace(/\s+/g, '-')}`}>
                  {column === "Status" && (<div className={row[column]}></div>)}
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table