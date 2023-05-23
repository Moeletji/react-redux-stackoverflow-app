import axios from 'axios';


const getStackoverflowBaseUrl = () => {
	if (window.location.hostname === 'localhost') {
		return `http://api.stackexchange.com/2.2/users?pagesize=20&order=desc&sort=reputation&site=stackoverflow`;
	}

	return `http://api.stackexchange.com/2.2/users?pagesize=20&order=desc&sort=reputation&site=stackoverflow`;
};

const stackoverflowInstance = axios.create({
	baseURL: getStackoverflowBaseUrl(),
});

stackoverflowInstance.defaults.headers.common['Accept'] = 'application/json';
// stackoverflowInstance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
stackoverflowInstance.defaults.headers.post['Content-Type'] = 'application/json';

export default stackoverflowInstance;