import request from 'superagent';
import * as types from '../constants/ActionTypes';

export function search(data) {
  	return dispatch => {
  		savedData = data;
	    request.post('/user')
	        .send(data)
	        .end((err, res) => {
	            if (err) {
	                alert('请求服务器异常');
	            } else if (!res.status) {
	                alert(res.message);
	            } else {
	            	dispatch({
	                	type: types.SEARCH,
	                	orders: [{
		                    id: 1,
		                    text: 'SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED'
			            }, {
			                id: 2,
			                text: 'SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED'
		                }]
	            	});
	            }
	    	});
    	dispatch({
        	type: types.SEARCH,
        	orders: [{
                id: 1,
                text: 'SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED'
            }, {
                id: 2,
                text: 'SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED'
            }]
    	});
  	};
};

