import React, { useEffect, useState } from "react";
import "./datatablers.scss";
import { DataGrid } from '@mui/x-data-grid';
import useAxios from "axios-hooks";
import axios from "axios";
import { Box } from "@mui/system";
import { CircularProgress} from "@mui/material";
import { Link } from "react-router-dom";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
 
const Datatablers = () => { 

  const [{data, error, loading}] = useAxios("https://tariya-real-estate.herokuapp.com/api/realestate/list")
  
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
  axios.post("https://tariya-real-estate.herokuapp.com/api/realestate/delete", {
    "deleteId": id
  })
  setRows(data.filter((item) => item.id !== id));
  window.location.reload(false);
};

const actionColumn = [{field: "action", headerName:"Action", width: 130, renderCell:(params)=>{
  return(
    <div className="cellAction">
      <Link to={{pathname: `/realEstate/${params.row.id}`}} style={{ textDecoration: "none"}}>
      <div className="viewButton">View</div>
      </Link>
        <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
    </div>
  ) 
} }];

const columns = [
        { field: 'id', headerName: 'ID', width: 50 }, 
        { field: 'sellerId', headerName: 'Seller ID', width: 80 },
        { field: 'price', headerName: 'Price', width: 120 },
        { field: 'location', headerName: 'Location', width: 80,},
        { field: 'houseType', headerName: 'House Type', width: 120,},
        { field: 'description', headerName: 'Full Description', width: 120,},
        { 
          field: 'verificationStatus', 
          headerName: 'Verf Status', 
          width: 100,
          renderCell: (params) => {
            
            return ( <div> {params.row.verificationStatus===1 ? <CheckIcon style={{width: "70px", backgroundColor: "rgba(0, 128, 0, 0.05)", color:"green"}}/> : <ClearIcon style={{width: "70px", backgroundColor: "rgba(255, 0, 0, 0.05)", color:"crimson"}}/>} </div>)
          }
        },
        { 
          field: 'houseStatus', 
          headerName: 'House Status', 
          width: 110,
          renderCell: (params) => {
            return <div className={`cellwithperm ${params.row.houseStatus}`}>{params.row.houseStatus}</div>
          }
        },
        { field: 'verificationDocs', headerName: 'Documents', width: 100,},
        
      ];

return (
  <div className="datatablers">
    <div className="datatableTitle">
    List of RealEstates
      <Link to="/realEstate/new" className="link">
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

export default Datatablers