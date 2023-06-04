import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "collegeName", headerName: "College Name", width: 450 },
  { field: "branchName", headerName: "Branch Name", width: 350 },
  { field: "cutOff", headerName: "Cut Off", width: 130 },
];

export default function Even() {
  const storedData = localStorage.getItem("data");
  const rows = storedData ? JSON.parse(storedData) : null;
  console.log(rows);

  // let rows=[]

  //      data.data.data?.forEach((item)=>{
  //          rows.push({ id: item._id + 1, collegeName: item.college, branchName: item.dept[0].dname, cutOff: item.dept[0].percentile }, { id: item._id + 2, collegeName: item.college, branchName: item.dept[1].dname, cutOff: item.dept[1].percentile }, { id: item._id + 3, collegeName: item.college, branchName: item.dept[2].dname, cutOff: item.dept[2].percentile }, { id: item._id + 4, collegeName: item.college, branchName: item.dept[3].dname, cutOff: item.dept[3].percentile }, { id: item._id + 5, collegeName: item.college, branchName: item.dept[4].dname, cutOff: item.dept[4].percentile }, { id: item._id + 6, collegeName: item.college, branchName: item.dept[5].dname, cutOff: item.dept[5].percentile })

  //     })
  //     console.log(rows);

  //  [
  //     { id: 1, collegeName: 'Snow', branchName: 'Jon', cutOff: 35 },
  //     { id: 2, collegeName: 'Snow', branchName: 'Jon', cutOff: 35 },
  //     { id: 3, collegeName: 'Snow', branchName: 'Jon', cutOff: 35 },
  //     { id: 4, collegeName: 'Snow', branchName: 'Jon', cutOff: 35 },
  //     { id: 5, collegeName: 'Snow', branchName: 'Jon', cutOff: 35 },
  //     { id: 6, collegeName: 'Snow', branchName: 'Jon', cutOff: 35 },
  //     { id: 7, collegeName: 'Snow', branchName: 'Jon', cutOff: 35 },
  //     { id: 8, collegeName: 'Snow', branchName: 'Jon', cutOff: 35 },
  //     { id: 9, collegeName: 'Snow', branchName: 'Jon', cutOff: 35 },
  // ];
  return (
    <div className="datatable h-[80%] p-2 mx-20">
    <div className="datatableTitle w-[100%] mb-10 flex items-center justify-center mt-16 font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] text-transparent">
      
    </div>
    <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                style={{ height: 400, width: '80%', margin: 'auto', marginTop: 20}}
            />

  </div>
  );
}


