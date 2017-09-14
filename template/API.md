# 接口设计

## 模块名称

> 描述模块有哪些接口，接口分别承担什么作用

### 1. 接口名称
接口简介

#### 1.1 接口URL
https://app.baichengyiliao.com/main.php/consult/answerer/init.json
#### 1.2 请求方式
post
#### 1.3 请求参数

|prop|Desc|
|----|----|
|appkey: |被咨询机构的中台appkey|
|secret: |被咨询机构的中台secret|
#### 1.4 接口返回
##### 1.4.1 成功
{
    ret: 1,
    data: "success"
}
##### 1.4.2 业务错误码
|错误吗|错误信息|
|---|---|
|错误码|错误信息说明|
