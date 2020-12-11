﻿import React, {useEffect} from "react";
import {Grid, withStyles} from "@material-ui/core";
import * as actions from "./footballersActions";
import {connect} from "react-redux";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import imageName from  '../../images/png-clipart-soccer-bal.png';
import {Link} from "react-router-dom";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Button from "@material-ui/core/Button";


const styles = (theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 1000,
        height: 1200,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});

const FootballersGrid= ({ classes, ...props }) => {

    useEffect(() => {
        props.fetchAllFootBalers()
    }, [])

        return (
                <GridList container cellHeight={180} cols={3}  spacing={3} className={classes.gridList}>
                    {props.footballersList.map((tile) => (
                        <GridListTile key={tile.footballerId}>
                            <img src={imageName} alt="some-image" />
                            <GridListTileBar
                                title={<span>Firstname: {tile.firstName}</span>  }
                                subtitle={<span>Middlename: {tile.middleName}</span>  }
                                actionIcon={
                                    <Link to="/">
                                        <Button size="small" color="primary">
                                            Details
                                        </Button>
                                    </Link>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
    
        );
    };

 
const mapStateToProps = state => ({
    footballersList: state.footballers.footballers,
})

const mapDispatchToProp = {
    fetchAllFootBalers: actions.fetchAllWithRoles,
}

export default connect(mapStateToProps, mapDispatchToProp)(withStyles(styles)(FootballersGrid));






