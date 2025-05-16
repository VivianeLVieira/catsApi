import { AgGridReact } from 'ag-grid-react'
import { useState } from 'react';

const ViewAllCats = ({catList}) => {

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        { headerName: 'Cat Image ID', field: "id" },
        { headerName: 'Breed Name', field: "breeds.0.name" }
    ]); 

    // "id": "beng",
    // "name": "Bengal",
    
    return (
        <>
            <h2>All cats list</h2>
            <div style={{ height: 200, width: 400 }}>
                <AgGridReact
                    rowData={catList}
                    columnDefs={colDefs}
                />
            </div>
        </>
    )
}

export default ViewAllCats 