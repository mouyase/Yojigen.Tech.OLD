---
title: 登陆接口
---
## 简要描述

- 热门Tag接口

## 请求URL
- ` /auth/token `
  
## 请求方式
- GET 

## 参数

|参数名|可选值|类型|说明|
|:- |:- |:- |:- |
|client_id|`MOBrBDS8blbauoSck0ZfDbtuzpyT`|string|客户端ID|
|client_secret|`lsACyCD94FhDUtGTXi3QzcFE2uU1hqtDaKeqrdwj`|string|客户端秘钥|
|grant_type|`refresh_token``password`|string|登陆类型|
|refresh_token||string|登陆刷新Token|
|get_secure_url|`true`|boolean|登陆刷新Token|
|include_policy|`true`|boolean|登陆刷新Token|

## 返回示例 

```json
{
	"access_token": "BN8DO-e7B2YPlz6VLDAasa1OMBUfCkpx5qOvY2BAR6M",
	"expires_in": 3600,
	"token_type": "bearer",
	"scope": "",
	"refresh_token": "owqinnydqbu5b2Tc63IlWvvZXZiS9INhCfM-ffglsD0",
	"user": {
		"profile_image_urls": {
			"px_16x16": "https:\/\/i.pximg.net\/user-profile\/img\/2020\/11\/12\/00\/35\/04\/19654967_53f78bde9cc1d0df2bd4d15270cc8599_16.jpg",
			"px_50x50": "https:\/\/i.pximg.net\/user-profile\/img\/2020\/11\/12\/00\/35\/04\/19654967_53f78bde9cc1d0df2bd4d15270cc8599_50.jpg",
			"px_170x170": "https:\/\/i.pximg.net\/user-profile\/img\/2020\/11\/12\/00\/35\/04\/19654967_53f78bde9cc1d0df2bd4d15270cc8599_170.jpg"
		},
		"id": "61347182",
		"name": "\u67d0\u4e9a\u745f",
		"account": "user_zdez5543",
		"mail_address": "mouyase@outlook.com",
		"is_premium": true,
		"x_restrict": 1,
		"is_mail_authorized": true,
		"require_policy_agreement": false
	},
	"response": {
		"access_token": "BN8DO-e7B2YPlz6VLDAasa1OMBUfCkpx5qOvY2BAR6M",
		"expires_in": 3600,
		"token_type": "bearer",
		"scope": "",
		"refresh_token": "owqinnydqbu5b2Tc63IlWvvZXZiS9INhCfM-ffglsD0",
		"user": {
			"profile_image_urls": {
				"px_16x16": "https:\/\/i.pximg.net\/user-profile\/img\/2020\/11\/12\/00\/35\/04\/19654967_53f78bde9cc1d0df2bd4d15270cc8599_16.jpg",
				"px_50x50": "https:\/\/i.pximg.net\/user-profile\/img\/2020\/11\/12\/00\/35\/04\/19654967_53f78bde9cc1d0df2bd4d15270cc8599_50.jpg",
				"px_170x170": "https:\/\/i.pximg.net\/user-profile\/img\/2020\/11\/12\/00\/35\/04\/19654967_53f78bde9cc1d0df2bd4d15270cc8599_170.jpg"
			},
			"id": "61347182",
			"name": "\u67d0\u4e9a\u745f",
			"account": "user_zdez5543",
			"mail_address": "mouyase@outlook.com",
			"is_premium": true,
			"x_restrict": 1,
			"is_mail_authorized": true,
			"require_policy_agreement": false
		}
	}
}
```

## 返回参数说明 

|参数名|类型|说明|
|:- |:-|:- |
|groupid |int   |用户组id，1：超级管理员；2：普通用户  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述