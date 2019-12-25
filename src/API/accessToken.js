import axios from 'axios';
// require('dotenv').config();
const CLIENT_ID = '425032cd9b654dc5ba1a059a7be29c61';
const CLIENT_SECRET = 'M3ORxNagOqROifI3awrIJ17afeI5rTVt';
export default axios.create({
	baseURL: `https://us.battle.net/oauth/token?grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
});
