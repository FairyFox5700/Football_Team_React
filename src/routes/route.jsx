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
import RoleWithPlayersTabs from "../containers/roles/footballerGrid";
import ResponsiveDrawer from "../containers/roles/rolesDrawer";
import FootballerForm from "../containers/footballers/addFootballerForm";
import macthesList from "../containers/match/macthesList";
import MatchesList from "../containers/match/macthesList";
import MatchesTable from "../containers/match/matchesTable";
import MatchPage from "../containers/match/macthesList";
export default class Routing extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/home" component ={Main}/>
                    <Route  path={`:clubId`} component={ClubDetails} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/clubs" component={ClubList} />
                    <Route exact path="/roles" component={ResponsiveDrawer} />
                    <Route exact path="/results" component={FootballResultTable} />
                    <Route exact path="/matches" component={MatchPage} />
                    <Route exact path="/footballers" component={FootballersCardList} /> 
                    <Route exact path="/footballer-form" component={FootballerForm} />
                    <Route exact path="/footballer-form/:personId" component={FootballerForm} />
                    <Route path="/footballers/:personId" component={FootballerDetails} />
                    <Route path="/sponsors/:clubId" component={SponsorsList} />
                    <Route path="/seasons/:clubId" component={SeasonsList} />
                    <Route path="/clubs/:clubId" component={ClubDetails} />
                    <Route path="/trainings" component={TrainingsList} />
                    <Route exact path="/" render={() => (<Redirect to="/home" />)} />
                </Switch>
            </main>
        );
    }
};