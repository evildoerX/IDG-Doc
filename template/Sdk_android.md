# SDK接入指南
## 1. 下载最新SDK，将ci_service_lib以module的方式引入。

|日期|版本号|描述|
|----|----|----|
|2016-11-03|2.0|支付宝支付升级，开放平台模式|
|2016-06-29|1.1|简化部署wxpayactivity|
|2016-06-20|1.0|完成支付接口|

> PS:代码中有可运行的PayDemo.apk 和 可以参考的调用Demo代码

## 2. Android Manifest配置

``` java
权限声明
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
    <uses-permission android:name="android.permission.READ_PHONE_STATE" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
注册activity
        <!-- 微信支付 -->
        <activity
            android:name="com.ci123.service.pay.weixin.WXPayCallbackActivity"
            android:configChanges="orientation|keyboardHidden|navigation|screenSize"
            android:launchMode="singleTop"
            android:theme="@android:style/Theme.Translucent.NoTitleBar" />

        <activity-alias
            android:name=".wxapi.WXPayEntryActivity"
            android:exported="true"
            android:targetActivity="com.ci123.service.pay.weixin.WXPayCallbackActivity" />

        <!-- 支付宝支付 -->
        <activity
            android:name="com.alipay.sdk.app.H5PayActivity"
            android:configChanges="orientation|keyboardHidden|navigation"
            android:exported="false"
            android:screenOrientation="behind"></activity>
        <activity
            android:name="com.alipay.sdk.auth.AuthActivity"
            android:configChanges="orientation|keyboardHidden|navigation"
            android:exported="false"
            android:screenOrientation="behind"></activity>
```
## 3. API

微信支付
支付宝支付
## 4. 混淆

```
-dontwarn com.ci123.service.pay.**
-keep class com.ci123.service.pay.**{*;}
```