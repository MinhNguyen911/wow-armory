import React, { Fragment } from 'react';

const ExtraResources = ({ characterName, realm, region }) => {
	if (characterName && realm && region) {
		return (
			<Fragment>
				<div className="ui black huge message">
					<div className="header">
						Want to find out more about your character?
					</div>
					<p>Check out these sites:</p>
					<div className="ui horizontal list">
						<div className="item">
							<a
								target="_blank"
								href="https://www.raidbots.com/"
								data-tooltip="A website to 'simulate' your character's combat potentials"
							>
								<img
									className="ui tiny circular image"
									src={require('../images/raidbots.jpg')}
								></img>
							</a>
						</div>
						<div className="item">
							<a
								target="_blank"
								href={`https://www.raider.io/character/${region}/${realm}/${characterName}`}
								data-tooltip="A website to track mainly your mythic plus and raid progression. Offer an unique and popular scoring system for mythic plus."
							>
								<img
									className="ui tiny circular image"
									src={require('../images/rio.png')}
								></img>
							</a>
						</div>
						<div className="item">
							<a
								target="_blank"
								href={`https://www.warcraftlogs.com/character/${region}/${realm}/${characterName}`}
								data-tooltip="A website specialized in breaking down fight encounters. You can find every details possible from your WoW logs here."
							>
								<img
									className="ui tiny circular image"
									src={require('../images/warcraftlogs.png')}
								></img>
							</a>
						</div>
					</div>
				</div>
			</Fragment>
		);
	} else {
		return (
			<div className="ui  inverted segment">
				<div className="ui active dimmer">
					<div className="ui medium text loader">Loading</div>
				</div>
				<p></p>
				<p></p>
				<p></p>
			</div>
		);
	}
};
export default ExtraResources;
