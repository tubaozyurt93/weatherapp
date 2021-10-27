import React from 'react';
import { Fragment } from 'react';
import '../scss/app.scss';

import Search from './Search'

export default class App extends React.Component {
	render() {
		return (
			<Fragment>
				<Search />
			</Fragment>
		);
	}
}
