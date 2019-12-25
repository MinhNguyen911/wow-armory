import React from 'react';
const CharacterDisplay = characterData => {
	const classIndex = [
		'None',
		'Warrior',
		'Paladin',
		'Hunter',
		'Rogue',
		'Priest',
		'Death Knight',
		'Shaman',
		'Mage',
		'Warlock',
		'Monk',
		'Druid',
		'Demon Hunter'
	];
	const raceIndex = [
		'None',
		'Human',
		'Orc',
		'Dwarf',
		'Night Elf',
		'Undead',
		'Tauren',
		'Gnome',
		'Troll',
		'Goblin',
		'Blood Elf',
		'Draenei',
		'Fel Orc',
		'Naga',
		'Broken',
		'Skeleton',
		'Vrykul',
		'Tuskarr',
		'Forest Troll',
		'Taunka',
		'Northrend Skeleton',
		'Ice Troll',
		'Worgen',
		'Gilnean',
		'Pandaren',
		'Pandaren',
		'Pandaren',
		'Nightborne',
		'Highmoutain Tauren',
		'Void Elf',
		'Lightforged Draenei',
		'Zandalari Troll',
		'Kul Tiran',
		'Human',
		'Dark Iron Dwarf',
		'Vulpera',
		"Mag'har Orc",
		'Mechagnome'
	];

	if (
		characterData.stats &&
		characterData.moreStats &&
		characterData.scores[0]
	) {
		let priStats = {
			Strength: characterData.stats.stats.str,
			Agility: characterData.stats.stats.agi,
			Intellect: characterData.stats.stats.str
		};
		return (
			<div className="main-body">
				<div className="ui fluid raised card">
					<div className="ui five column divided padded grid">
						<div className="row">
							<div className="center aligned brown column">
								<img
									className="center aligned image"
									src={`http://render-us.worldofwarcraft.com/character/${characterData.stats.thumbnail}`}
									alt="avatar"
								/>
								<div className="header">
									{characterData.stats.name}-{characterData.stats.realm}
								</div>
								<div className="meta">Level {characterData.stats.level}</div>
								<div className="description">{`${
									raceIndex[characterData.stats.race]
								} ${characterData.moreStats.active_spec_name} ${
									classIndex[characterData.stats.class]
								}`}</div>
							</div>
							{characterData.scores[0] ? (
								<>
									<div className="center aligned red column">
										<div className="ui header">BFA Season 3</div>
										<div className="ui description">
											{characterData.scores[0].scores.all}
										</div>
									</div>
									<div className="center aligned orange column">
										<div className="ui header">BFA Season 2</div>
										<div className="ui description">
											{characterData.scores[1].scores.all}
										</div>
									</div>
									<div className="center aligned yellow column">
										<div className="ui header">BFA Season 1</div>
										<div className="ui description">
											{characterData.scores[2].scores.all}
										</div>
									</div>
									<div className="center aligned grey column">
										<div className="ui header">Legion Season 7.3.2</div>
										<div className="ui description">
											{characterData.scores[3].scores.all}
										</div>
									</div>
								</>
							) : (
								<div className="ui active inline loader"></div>
							)}
						</div>
					</div>
				</div>

				<h2 className="ui header">Main Stats</h2>
				<div className="ui four column divided grid">
					<div className="row">
						<div className="column">
							<div
								className="ui raised segment"
								data-tooltip="If this reaches 0, you die!"
								data-position="top left"
							>
								<p className="ui header">Health</p>
								<p className="ui description">
									{characterData.stats.stats.health}
								</p>
							</div>
						</div>
						<div className="column">
							<div
								className="ui raised segment"
								data-tooltip="Reduces physical damage taken"
								data-position="top center"
							>
								<p className="ui header">Armor</p>
								<p className="ui description">
									{characterData.stats.stats.armor}
								</p>
							</div>
						</div>
						<div className="column">
							<div
								className="ui raised segment"
								data-tooltip="Increases your health points"
								data-position="top center"
							>
								<p className="ui header">Stamina</p>
								<p className="ui description">
									{characterData.stats.stats.sta}
								</p>
							</div>
						</div>
						<div className="column">
							<div
								className="ui raised segment"
								data-tooltip="Increases the magnitude of your attacks"
								data-position="top right"
							>
								<p className="ui header">
									{Object.keys(priStats).reduce((a, b) =>
										priStats[a] > priStats[b] ? a : b
									)}
								</p>
								<p className="ui description">
									{Math.max(
										characterData.stats.stats.str,
										characterData.stats.stats.agi,
										characterData.stats.stats.int
									)}
								</p>
							</div>
						</div>
					</div>
				</div>
				<h2 className="ui header">Secondary Stats</h2>
				<div className="ui four column divided grid">
					<div className="row">
						<div className="column">
							<div
								className="ui raised segment"
								data-tooltip="The chance for your attacks to be a critical strike (double damage)"
								data-position="top left"
							>
								<p className="ui header">Critical</p>
								<p className="ui description">
									{characterData.stats.stats.critRating} (
									{characterData.stats.stats.crit.toFixed(2)}%)
								</p>
							</div>
						</div>
						<div className="column">
							<div
								className="ui raised segment"
								data-tooltip="A special effect that increase a certain power of your specilization"
								data-position="top center"
							>
								<p className="ui header">Mastery</p>
								<p className="ui description">
									{characterData.stats.stats.masteryRating} (
									{characterData.stats.stats.mastery.toFixed(2)}%)
								</p>
							</div>
						</div>
						<div className="column">
							<div
								className="ui raised segment"
								data-tooltip="The speed of your attacks. Also can reduce global cooldown and certain spells depends on your specialization"
								data-position="top center"
							>
								<p className="ui header">Haste</p>
								<p className="ui description">
									{characterData.stats.stats.hasteRating} (
									{characterData.stats.stats.haste.toFixed(2)}
									%)
								</p>
							</div>
						</div>
						<div className="column">
							<div
								className="ui raised segment"
								data-tooltip="Directly increase your damage and healing done. Also reduce your damage taken"
								data-position="top right"
							>
								<p className="ui header">Versatility</p>
								<p className="ui description">
									{characterData.stats.stats.versatility} (
									{characterData.stats.stats.versatilityDamageDoneBonus.toFixed(
										2
									)}
									%)
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="column">
							<div
								className="ui raised segment"
								data-tooltip="The chance to block an attack"
								data-position="top left"
							>
								<p className="ui header">Block</p>
								<p className="ui description">
									{characterData.stats.stats.blockRating} (
									{characterData.stats.stats.block.toFixed(2)}%)
								</p>
							</div>
						</div>
						<div className="column">
							<div
								className="ui raised segment"
								data-tooltip="The chance to parry an attack"
								data-position="top center"
							>
								<p className="ui header">Parry</p>
								<p className="ui description">
									{characterData.stats.stats.parry.toFixed(2)}%
								</p>
							</div>
						</div>
						<div className="column">
							<div
								className="ui raised segment"
								data-tooltip="The chance to dodge an attack"
								data-position="top center"
							>
								<p className="ui header">Dodge</p>
								<p className="ui description">
									{characterData.stats.stats.dodge.toFixed(2)}%
								</p>
							</div>
						</div>
						<div className="column">
							<div
								className="ui raised segment"
								data-tooltip="Return a portion of damage and healing as healing to you"
								data-position="top right"
							>
								<p className="ui header">Leech</p>
								<p className="ui description">
									{characterData.stats.stats.leechRating} (
									{characterData.stats.stats.leech.toFixed(2)}%)
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
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
export default CharacterDisplay;
