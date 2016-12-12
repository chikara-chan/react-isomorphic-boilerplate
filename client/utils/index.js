import request from 'superagent';

const Utils = function() {
	if (!(this instanceof Utils)) {
		return new Utils();
	}
};

Utils.prototype.ajax = function(options) {
	const defaultOptions = {
		'type': 'post',
		'url': null,
		'data': {},
		'success': null,
		'Content-Type': 'application/json'
	};
	let promise;

	options = Object.assign({}, defaultOptions, options);
	promise = request[options['type']](options['url']);
	Object.keys(options).forEach(key => {
		if (!key.match(/type|url|data|success/)) {
			promise.set(key, options[key]);
		}
	});
	promise.send(options['data']).end((err, res) => {
		if (err) {
			CRM.dialog({
				title: '温馨提示：',
				quickClose: true,
				id: "crm_dialog",
				width: 330,
				zIndex: 1112,
				fixed: true,
				content: '请求服务器异常'
			}).showModal();
		} else if (!res.body.status) {
			CRM.dialog({
				title: '温馨提示：',
				quickClose: true,
				id: "crm_dialog",
				width: 330,
				zIndex: 1112,
				fixed: true,
				content: res.body.message
			}).showModal();
		} else {
			const callback = options['success'];
			callback && callback(res.body.entry);
		}
	});
};

Utils.prototype.getOuterUrl = function(url) {
	// 本地环境
	if (~location.host.indexOf('dev.')) {
		return 'http://daily.manage.51xianqu.com' + url;
	}
	// 线上环境
	else {
		return 'http://' + document.domain + url;
	}
};

Utils.prototype.formatDate = function(timestamp, format) {
	const date = new Date(timestamp);
	const years = date.getFullYear().toString();
	const month = date.getMonth().toString();
	const day = date.getDate().toString();
	const hours = date.getMonth().toString();
	const minutes = date.getMinutes().toString();
	const seconds = date.getSeconds().toString();

	return format.replace(/y+|M+|d+|h+|m+|s+/g, match => {
		const length = match.length;
		switch (match.charAt(0)) {
			case 'y':
				return years.substr(-length);
			case 'M':
				return (month.length == 1 ? '0' + month : month).substr(-length);
			case 'd':
				return (day.length == 1 ? '0' + day : day).substr(-length);
			case 'h':
				return (hours.length == 1 ? '0' + hours : hours).substr(-length);
			case 'm':
				return (minutes.length == 1 ? '0' + minutes : minutes).substr(-length);
			case 's':
				return (seconds.length == 1 ? '0' + seconds : seconds).substr(-length);
		}
	});
};

Utils.prototype.getUrlSearchObject = function() {
	const search = location.search.slice(1);
	const rParam = /([^&]*)=([^&]*)/g;
	let ret = {};
	let param;

	while (param = rParam.exec(search)) {
		ret[param[1]] = param[2];
	}

	return ret;
};

const utils = new Utils();

export default utils;