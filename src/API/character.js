import axios from 'axios';
export default axios.create({
	baseURL: `https://us.api.blizzard.com/wow/character`
});
