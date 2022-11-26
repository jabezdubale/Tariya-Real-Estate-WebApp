import React from "react";
import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import useAxios from "axios-hooks";
import { Box } from "@mui/system";

const ListAccounts = () => {

        const [{data, error, loading}] = useAxios("https://tariya-real-estate.herokuapp.com/api/account/list")
        if (loading){
            return (
                <Box sx={{display: "flex"}}>
                    <CircularProgress />
                </Box>
            );
        } 

        if(error) return <p> Sorry A error {error.message} happened</p>

    return (
        <>
        <h1>List of Accounts</h1>
        <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Full Name</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Email Address</TableCell>
                    <TableCell>Date of Birth</TableCell>
                    <TableCell>Customer Type</TableCell>
                    <TableCell>Password</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
            
                    {data.map((AccountRow) => {
                        return (
                            <TableRow>
                                <TableCell>{AccountRow.id}</TableCell>
                                <TableCell>{AccountRow.fullName}</TableCell>
                                <TableCell>{AccountRow.phone}</TableCell>
                                <TableCell>{AccountRow.email}</TableCell>
                                <TableCell>{AccountRow.dob}</TableCell>
                                <TableCell>{AccountRow.permission}</TableCell>
                                <TableCell>{AccountRow.pin}</TableCell>
                        </TableRow>

                        )
                        
                    }) }
                
            </TableBody>

        </Table>

        </TableContainer>
        
        </>
    );
}

export default ListAccounts;