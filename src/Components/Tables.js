import React, {useState} from 'react'

function Tables() {
    const tableTimes = ["15.00 - 17.00", "17.00 - 19.00",
                      "19.00 - 21.00", "21.00 - 23.00"];
    const [initTable, renderTable] = useState(false);

    const tableRows = () => {
        let tableList = [];

        for(let i = 0; i < tableTimes.length; i+=1) {
            tableList.push(
            <tr>
                <td className="tbodyTd" style={{backgroundColor: colorTableCells()}}>{tableTimes[i]}</td>
            </tr>
            )
        }
        return <table className="tableTimes">
                <thead>
                    <tr>
                        <th className="tableHead">Times Available</th>
                    </tr>
                </thead>
                    <tbody className="tbody">{tableList}</tbody>
                 </table>  
    }

    const colorTableCells = () => {
        const colors = ["rgba(255, 0, 0, 0.5)", "rgba(0,128,0, 0.5)"];
        let randomColor = colors[Math.floor(Math.random()*colors.length)];
        return randomColor
    }


    return (
        <div className="tableContainer">
            
           <h3>I would like a table for</h3>
            <div className="tableBtnContainer">
                <input type="button" value="1-2" onClick={() => renderTable(!initTable)}></input>
                <input type="button" value="3-4"></input>
                <input type="button" value="4-6"></input>
            </div>
            <div>
            {initTable && tableRows()}
            </div>
            
        </div>
    )
}

export default Tables