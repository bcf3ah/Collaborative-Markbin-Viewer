//import dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Bins} from '../imports/collections/bins';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import BinsMain from './components/bins/bins_main';
import BinsList from './components/bins/bins_list';

//React Router Mapping
const routes = (
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={BinsList} />
				<Route path='bins/:binId' component={BinsMain} />
			</Route>
		</Router>
	)

//startup Meteor
Meteor.startup(()=>{
	ReactDOM.render(routes, document.querySelector(".renderTarget"));
});