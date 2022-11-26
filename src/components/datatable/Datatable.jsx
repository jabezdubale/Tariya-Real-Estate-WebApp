import React, { useEffect, useState } from "react";
import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import useAxios from "axios-hooks";
import axios from "axios";
import { Box } from "@mui/system";
import { CircularProgress} from "@mui/material";
import { Link } from "react-router-dom";

 
const Datatable = () => { 

  const [{data, error, loading}] = useAxios("https://tariya-real-estate.herokuapp.com/api/account/list")
  
  const [rows, setRows] = useState(null)

  useEffect (() => {
    setRows(data);
  },[data]);

  if (loading){
    return (
        <Box sx={{display: "flex"}}>
            <CircularProgress />
        </Box>
    );
  } 
  if(error) return <p> Sorry A error {error.message} happened</p>
  
const handleDelete = (id) => {
  axios.post("https://tariya-real-estate.herokuapp.com/api/account/delete", {
    "deleteId": id
  })
  setRows(data.filter((item) => item.id !== id));
  window.location.reload(false);
};

const actionColumn = [{field: "action", headerName:"Action", width: 130, renderCell:(params)=>{
  return(
    <div className="cellAction">
      <Link to={{pathname: `/users/${params.row.id}`}} style={{ textDecoration: "none"}}>
      <div className="viewButton">View</div>
      </Link>
        <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
    </div>
  ) 
} }];

const columns = [
        { field: 'id', headerName: 'ID', width: 50 }, 
        { field: 'fullName', headerName: 'Full Name', width: 160 },
        { field: 'phone', headerName: 'Phone Number', width: 140 },
        { field: 'email', headerName: 'Email', width: 220,},
        { field: 'dob', headerName: 'Date of Birth', width: 120,},
        { 
          field: 'permission', 
          headerName: 'Customer Type', 
          width: 110,
          renderCell: (params) => {
            return <div className={`cellwithperm ${params.row.permission}`}>{params.row.permission}</div>
          }
        },
        { field: 'pin', headerName: 'Password', width: 100,},
        
      ];

return (
  <div className="datatable">
    <div className="datatableTitle">
    List
      <Link to="/users/new" className="link">
        Add New
      </Link>
    </div>
    <div className="datagrid">
      {rows && <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)} 
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />}
    </div>
    </div>
  );
}

export default Datatable