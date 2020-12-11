
import * as React from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Container
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import {ToastProvider} from "react-toast-notifications";
import { HashRouter } from 'react-router-dom'
import Routing from "../../routes/route";


const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "rgba(60,3,76,0.95)"
    },
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        fontFamily: 'Goldman',
        color: `white`
    },
  
}));

const navLinks = [
    { title: `about`, path: `about` },
    { title: `clubs`, path: `clubs` },
    { title: `players`, path: `/Football_Team_React/footballers` },
    { title: `results`, path: `/Football_Team_React/results` },  
    { title: `macthes`, path: `/Football_Team_React/matches` },
];

const Header = () => {
    const classes = useStyles();
    return (
        <div className={"App"}>
           
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Container maxWidth="lg" className={classes.navDisplayFlex}>
                        <IconButton edge="start" color="inherit" aria-label="home">
                            <Home fontSize="large" />
                        </IconButton>
                        <List
                            component="nav"
                            aria-labelledby="main navigation"
                            className={classes.navDisplayFlex}
                        >
                            {navLinks.map(({ title, path }) => (
                                <a href={path} key={title} className={classes.linkText}>
                                    <ListItem button>
                                        <ListItemText primary={title} />
                                    </ListItem>
                                </a>
                            ))}
                        </List>
                    </Container>
                </Toolbar>
            </AppBar>
            <HashRouter >
                <ToastProvider autoDismiss={true}>
                    <Routing/>
                </ToastProvider>
            </HashRouter>
        </div>
    );
};
export default Header;