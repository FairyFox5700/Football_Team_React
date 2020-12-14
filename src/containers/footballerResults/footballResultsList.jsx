import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import * as actions from "./footballResultsActions";
import {connect, useDispatch, useSelector} from "react-redux";
import {useToasts} from "react-toast-notifications";
import {Grid} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Container from "@material-ui/core/Container";




const useStyles = {
    table: {
        minWidth: 700,
    },
};

const FootballResultTable = ({ classes, ...props }) => {
    console.info("In table row")
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.fetchAllWithPlayers())
        return () => {
        };
    }, []);
    
    const footballDetails = useSelector((state) => state.footballResults);
    const { results , loading, error } = footballDetails
    console.log(200)
    console.log(results)

    //toast msg.
    const { addToast } = useToasts()

    return (
        <Container maxWidth="md">
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error} </div>
            ) : (
                <>
                    <Paper className={classes.paper} elevation={3}>
                        <Grid container>
                            <Grid item xs={12}>
                                <TableContainer>
                                    <Table>
                                        <TableHead className={classes.root}>
                                            <TableRow>
                                                <TableCell>Result Id</TableCell>
                                                <TableCell >ScoredGoals</TableCell>
                                                <TableCell>MissedGoals</TableCell>
                                                <TableCell >RedCardCount</TableCell>
                                                <TableCell >YellowCardCount</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                results.map((record,index) => {
                                                    return (<TableRow key={index} hover>
                                                            <TableCell>{index}</TableCell>
                                                            <TableCell>{record.scoredGoals}</TableCell>
                                                            <TableCell>{record.missedGoals}</TableCell>
                                                            <TableCell>{record.redCardCount}</TableCell>
                                                            <TableCell>{record.yellowCardCount}</TableCell>
                                                          </TableRow>
                                                    )
                                                })
                                                
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                    </Paper>
                </>)
            }
        </div>
         </Container>
    );
}


const mapStateToProps = state => ({
    results: state.footballResults.results
})

const mapDispatchToProp = {
    fetchAllResults:actions.fetchAllWithPlayers
}


export default connect(mapStateToProps, mapDispatchToProp)(withStyles(useStyles)(FootballResultTable))
