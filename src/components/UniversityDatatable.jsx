import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { userColumns, userRows } from '../constants/datasource';

const UniversityDataTable = () => {

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction flex items-center gap-3">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton rounded border cursor-pointer p-1 text-green-500">View</div>
            </Link>
            <div
              className="deleteButton p-1 rounded text-red-500 border cursor-pointer"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  const actionRow = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/products/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable h-[80%] p-2 mx-10">
    <div className="datatableTitle w-[100%] mb-10 flex items-center justify-between mt-8 border-green-700">
      Add New User
      <Link to="/users/new" className="link text-green-400 border rounded p-1 cursor-pointer">
        Add New
      </Link>
    </div>
    <DataGrid
      className="datagrid"
      rows={userRows}
      columns={userColumns.concat(actionColumn)}
      pageSize={9}
      rowsPerPageOptions={[9]}
      checkboxSelection
    />
  </div>
  )
}

export default UniversityDataTable