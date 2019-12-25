import axios from 'axios';
export default axios.create({
	baseURL: `https://raider.io/api/v1/characters`
});
