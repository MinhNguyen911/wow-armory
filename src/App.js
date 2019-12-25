import React, { useState, useEffect, Fragment } from 'react';
import useForm from 'react-hook-form';
import character from './API/character';
import accessToken from './API/accessToken';
import raiderIO from './API/raiderio';
import CharacterDisplay from './components/CharacterDisplay';
import ExtraResources from './components/ExtraResources';
import './App.css';

const App = () => {
	const { register, handleSubmit, errors } = useForm();
	const [name, setName] = useState('');
	const [realm, setRealm] = useState('');
	const [region, setRegion] = useState('');
	const [error, setError] = useState('');
	const [characterData, setCharacterData] = useState({
		stats: {},
		scores: {}
	});
	const [query, setQuery] = useState({
		region: 'us',
		realm: 'Tichondrius',
		characterName: 'Sassyfist'
	});
	useEffect(() => {
		getData();
	}, [query]);

	const getData = async () => {
		try {
			// GET ACCESS TOKEN
			const response = await accessToken.get();
			const access_token = response.data.access_token;
			//
			const { region, realm, characterName } = query;
			// GET CHARACTER DATA (STATS MOSTLY)
			character.defaults.baseURL = `https://${region}.api.blizzard.com/wow/character`;
			const stats_response = await character.get(
				`/${realm}/${characterName}?fields=stats&access_token=${access_token}`
			);
			console.log(stats_response);
			const scores_response = await raiderIO.get(
				`/profile?region=${region}&realm=${realm}&name=${characterName}&fields=mythic_plus_scores_by_season%3Aseason-bfa-3%3Aseason-bfa-2%3Aseason-bfa-1%3Aseason-7.3.2`
			);
			console.log(scores_response);
			setCharacterData({
				stats: stats_response.data,
				moreStats: scores_response.data,
				scores: scores_response.data.mythic_plus_scores_by_season
			});
		} catch (err) {
			console.log(err.message);
			setError(err.message);
		}
	};

	const updateName = e => {
		setName(e.target.value);
	};
	const updateRealm = e => {
		setRealm(e.target.value);
	};
	const updateRegion = e => {
		setRegion(e.target.value);
	};
	const getSearch = () => {
		setQuery({
			characterName: name,
			realm,
			region
		});
		setCharacterData({});
		setName('');
		setRealm('');
		setRegion('');
		setError('');
	};
	return (
		<div className="wow-app">
			<div className="ui container">
				<div className="ui inverted segment">
					<form
						className="ui fluid inverted form"
						onSubmit={handleSubmit(getSearch)}
					>
						<div className="fields">
							<div className="field">
								<label>Character Name</label>
								<input
									type="text"
									name="name"
									placeholder="Name"
									value={name}
									onChange={updateName}
									ref={register({ required: true })}
								/>
								{errors.name && (
									<div className="ui pointing red basic label">
										This field is required
									</div>
								)}
							</div>

							<div className="field">
								<label>Realm</label>
								<input
									type="text"
									name="realm"
									placeholder="Realm"
									value={realm}
									onChange={updateRealm}
									ref={register({ required: true })}
								/>
								{errors.realm && (
									<div className="ui pointing red basic label">
										This field is required
									</div>
								)}
							</div>
							<div className="field">
								<label>Region</label>
								<input
									type="text"
									name="region"
									placeholder="(US, EU)"
									value={region}
									onChange={updateRegion}
									ref={register({
										required: true,
										validate: value => ['us', 'eu', 'tw', 'kr'].includes(value)
									})}
								/>
								{errors.region && errors.region.type === 'required' && (
									<div className="ui pointing red basic label">
										This field is required
									</div>
								)}
								{errors.region && errors.region.type === 'validate' && (
									<div className="ui pointing red basic label">
										Only valid entries are 'US','EU','TW' and 'CN'
									</div>
								)}
							</div>
						</div>
						<button className="ui inverted red button" type="submit">
							Submit
						</button>
					</form>
				</div>
				{error ? (
					<div className="ui negative message">
						<div className="header"> Character(or Realm) Not Found! </div>
						<p>
							Check your spelling before submitting! Or this character has gone
							to the shadow realm...
						</p>
					</div>
				) : (
					<Fragment>
						<CharacterDisplay {...characterData} />
						<ExtraResources {...query} />
					</Fragment>
				)}
			</div>
		</div>
	);
};

export default App;
