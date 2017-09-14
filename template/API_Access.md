# 初始化咨询服务

## 应用场景
 开发者初始化咨服务或者使用咨询sdk前调用一下注册app信息接口，向咨询服务端注册appkey、appsecret、channel信息，调用一次就可以。
## 接口链接

https://oneitfarm.com/pay/main.php/json/trade/createWeixinMobileTrade
## 是否需要签名

调用时参数需要签名，得到返回值需要验签
## 请求方式

POST
## 请求参数

|字段|类型|是否必须|描述|
|---|---|-------|----|
|app_key|string|是|appkey|
|channel|int|否|channel 不传默认0|
|subject|string|是|交易主题 长度[1, 128] 格式见参数规则-6. subject建议格式|
|total_fee|int|是|交易总金额 单位分|
|notify_url|string|是|支付结果通知回调地址|
|out_trade_no|string|是|业务交易单号，业务系统内部唯一 [1, 32]|
|sign|string|是|签名|

## 返回值格式

JSON
返回值

### 成功
|字段名|类型|是否必须|注释|
|---|---|-------|----|
|ret|int|是|1|
|trade_no|string|是|交易单号|
|pay_param|string|是|微信支付参数|
|sign|string|是|签名|
### 失败
|字段名|类型|是否必须|注释|
|---|---|-------|----|
|ret|int|是|0|
|code|int|是|错误码|
|msg|string|是|错误信息|

## PHP SDK 示例
~~~ php
<?php

$payConfig = new \CIPay\PayConfig();
$payConfig->setAppkey("your appkey");
$payConfig->setAppsecret("your appsecret");
$payConfig->setChannel(0);      //也可不设置 默认0

try {
    $createWeixinMobileTrade = new \CIPay\Request\CreateWeixinMobileTrade();
    $createWeixinMobileTrade->setSubject("测试物品");
    $createWeixinMobileTrade->setTotalFee(1);
    $createWeixinMobileTrade->setOutTradeNo("1238767920472312");
    $createWeixinMobileTrade->setNotifyUrl("http://idg-tangsiyuan.tunnel.nibaguai.com/pay/t.php");
    $data = $createWeixinMobileTrade->execute($payConfig);

    //todo...
    var_dump($data);
} catch (Exception $e) {
    echo "请求失败:" . $e->getMessage();
}
~~~