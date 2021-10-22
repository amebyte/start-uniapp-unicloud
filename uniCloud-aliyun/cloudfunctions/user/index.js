'use strict';
const appid = ''
const secret = ''
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const {
		code,
		avatarUrl,
		gender,
		nickName
	} = event
	const URL = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`
	const requestOptions = {
		method: 'GET',
		dataType: 'json'
	}
	const res = await uniCloud.httpclient.request(URL,requestOptions)
	console.log('res', res)
	//返回数据给客户端
	return event
};
