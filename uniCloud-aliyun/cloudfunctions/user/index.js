'use strict';
const appid = 'wx5478d0fce9c1dc63'
const secret = '445cf16777099d73d9a282c37cf5055a'
const db = uniCloud.database();
// 创建user数据表实例
const user = db.collection('user');
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
	const { data: { openid } } = res
	const countRes = await user.where({openid}).count()
	console.log('count', count)
	if(countRes.total !== 1 ) {
		// 往user数据表里面添加数据
		user.add({
			openid
			avatarUrl,
			gender,
			nickName
		})
	}
	//返回数据给客户端
	return {
		openid
		avatarUrl,
		gender,
		nickName
	}
};
