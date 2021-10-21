# 使用uniapp + uniCloud实现小程序登录功能
### 学前准备

#### 注册一个小程序
1. 个人也是可以注册小程序的，只是有些功能不能使用

2. 需要准备一个未注册过微信公众号和小程序的邮箱

3. 前往注册[小程序注册](https://mp.weixin.qq.com/wxopen/waregister?action=step1&token=&lang=zh_CN)

4. 获取AppID 和AppSecret 

    ![](./md/mini-project.png)

#### 注册一个uniCloud

如果您还未开通过uniCloud，请在web界面开通：<https://unicloud.dcloud.net.cn/> 

### 创建uniCloud项目

按uniCloud官网建立一个uniCloud项目【[传送门](https://uniapp.dcloud.io/uniCloud/quickstart?id=%e5%88%9b%e5%bb%baunicloud%e9%a1%b9%e7%9b%ae)】

### 登录代码

```javascript
<button open-type="getUserInfo" @getuserinfo="getUserInfo">登录</button>
```

uni-app [button登录组件](https://uniapp.dcloud.io/component/button)

**open-type 有效值** 

 ![](./md/uni-app-button-open-type.png)

### [uni.login(OBJECT)](https://uniapp.dcloud.io/api/plugins/login?id=login)

```javascript
methods: {
    getUserInfo() {
        uni.showModal({
            title: '温馨提示',
            content: '亲，授权微信登录后才能正常使用小程序功能',
            success(res) {
                if (res.confirm) {
                    uni.getUserProfile({
                        desc: "注册用户信息使用",
                        lang: "zh_CN",
                        success:(res) => {
                            console.log('res', res)
                            uni.login({
                                provider: 'weixin',
                                success: function(loginRes) {
                                    console.log('loginRes.authResult',loginRes);
                                }
                            });
                        }
                    })
                } else {
                    uni.showToast({
                        title: '您取消了授权',
                        duration: 2000
                    });
                }
            }
        })
    }
}
```








