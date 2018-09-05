
import webapi from './webapi'

var _options = {
	webapi,
	webapiMap: {
		'portal.init':'/v1/portal/init',
		'user.logout': '/v1/user/logout'
	},
	websiteName: '某某系统',
	logo: 'logo.png',
	goAfterSignOut: {
		appName: 'zlj-sign-in',
		appParams: {}
	},
	menu: [{
		key: '1',
		name: '首页',
		appName: 'zlj-home',
		icon: 'home',
		fontFamily: 'awesome',
		isDefault: true
	}]
}

function config(options) {
	if (options) {
		Object.assign(_options, options)
	}
}

config.current = _options

export default config