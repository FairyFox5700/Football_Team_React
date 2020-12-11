import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";

import ClubList from "../containers/clubs/footballClubsList.jsx";
import About from "../containers/about/about.jsx";
import FootballResultTable from "../containers/footballerResults/footballResultsList";
import FootballersList from "../containers/footballers/footballersWithRolesList";
import FootballerDetails from "../containers/footballers/footballersDetails"
import TrainingsList from "../containers/trainings/trainingsList"
import FootballersGrid from "../containers/footballers/footballersGrid";
import SponsorsList from "../containers/sponsores/sponsoresList";
import SeasonsList from "../containers/seasones/seasoneList";
import ClubDetails from "../containers/clubs/clubsDetails";
import FootballersCardList from "../containers/footballers/footballerCardList";
import Main from "../components/hero";
import ResponsiveDrawer from "../containers/roles/rolesDrawer";
import FootballerForm from "../containers/footballers/addFootballerForm";
import MatchPage from "../containers/match/macthesList";
export default class Routing extends React.Component {
    render() {
        return (
            <>
                    <Route path="/Football_Team_React/home" render={() =>(Main)}/>
                    <Route exact path="Football_Team_React/about" render={() =>(About)} />
                    <Route exact path="/Football_Team_React/clubs" render={() =>(ClubList)} />
                    <Route exact path="/roles" render={() =>(ResponsiveDrawer)} />
                    <Route exact path="/results" render={() =>(FootballResultTable)} />
                    <Route exact path="/matches" render={() =>(MatchPage)} />
                    <Route exact path="/footballers" render={() =>(FootballersCardList)} /> 
                    <Route exact path="/footballer-form" render={() =>(FootballerForm)} />
                    <Route exact path="/footballer-form/:personId" render={() =>(FootballerForm)} />
                    <Route path="/footballers/:personId" render={() =>(FootballerDetails)} />
                    <Route path="/sponsors/:clubId" render={() =>(SponsorsList)} />
                    <Route path="/seasons/:clubId" render={() =>(SeasonsList)} />
                    <Route path="/clubs/:clubId" render={() =>(ClubDetails)} />
                    <Route path="/trainings" render={() =>(TrainingsList)} />
                    <Route exact path="/" render={() => (<Redirect to="/home" />)} />
                    </>
        );
    }
};