---
title: 获取搜索条件喜欢数区间
---
## 简要描述

- 获取搜索条件喜欢数区间

## 请求URL
- ` /v1/search/bookmark-ranges/illust `
  
## 请求方式
- GET 

## 参数

|参数名|可选值|类型|说明|
|:- |:- |:- |:- |
|filter|`for_android`|string||
|include_translated_tag_results|`true`|boolean|客户端秘钥|
|merge_plain_keyword_results|`true`|boolean|登陆类型|
|word||string|搜索关键词|
|search_target|`exact_match_for_tags`|string|搜索目标|

## 返回示例 

```json
{
	"bookmark_ranges": [{
		"bookmark_num_min": "*",
		"bookmark_num_max": "*"
	}, {
		"bookmark_num_min": "100000",
		"bookmark_num_max": "*"
	}, {
		"bookmark_num_min": "50000",
		"bookmark_num_max": "99999"
	}, {
		"bookmark_num_min": "10000",
		"bookmark_num_max": "49999"
	}, {
		"bookmark_num_min": "5000",
		"bookmark_num_max": "9999"
	}, {
		"bookmark_num_min": "1000",
		"bookmark_num_max": "4999"
	}, {
		"bookmark_num_min": "500",
		"bookmark_num_max": "999"
	}, {
		"bookmark_num_min": "300",
		"bookmark_num_max": "499"
	}, {
		"bookmark_num_min": "100",
		"bookmark_num_max": "299"
	}, {
		"bookmark_num_min": "50",
		"bookmark_num_max": "99"
	}, {
		"bookmark_num_min": "30",
		"bookmark_num_max": "49"
	}, {
		"bookmark_num_min": "10",
		"bookmark_num_max": "29"
	}]
}
```

## 返回参数说明 

|参数名|类型|说明|
|:- |:-|:- |
|groupid |int   |用户组id，1：超级管理员；2：普通用户  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述