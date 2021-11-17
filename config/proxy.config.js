const proxyConfig = {
	'*': {
		target: 'http://localhost:8090'
	}
}

module.exports = proxyConfig;