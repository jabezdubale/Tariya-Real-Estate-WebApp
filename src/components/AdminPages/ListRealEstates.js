import React from "react";
import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import useAxios from "axios-hooks";
import { Box } from "@mui/system";

const ListRealEstates = () => {

    const [{data, error, loading}] = useAxios("https://tariya-real-estate.herokuapp.com/api/realestate/list")
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
        <h1>List of RealEstates</h1>
        <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Seller's ID</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>RealEstates Type</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Full Description</TableCell>
                    <TableCell>Verification Doc link</TableCell>
                    <TableCell>Verification Status</TableCell>
                    <TableCell>Is the house sold yet?</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
            {data.map((RealEstateRow) => {
                        return (
                            <TableRow>
                                <TableCell>{RealEstateRow.id}</TableCell>
                                <TableCell>{RealEstateRow.sellerId}</TableCell>
                                <TableCell>{RealEstateRow.location}</TableCell>
                                <TableCell>{RealEstateRow.houseType}</TableCell>
                                <TableCell>{RealEstateRow.price}</TableCell>
                                <TableCell>{RealEstateRow.description}</TableCell>
                                <TableCell>{RealEstateRow.verificationDocs}</TableCell>
                                <TableCell>{RealEstateRow.verificationStatus}</TableCell>
                                <TableCell>{RealEstateRow.houseStatus}</TableCell>
                        </TableRow>

                        )
                        
                    }) }
            </TableBody>

        </Table>

        </TableContainer>

        </>
    );
}

export default ListRealEstates;