# 签名验证规则

## 1. 适用场景

调用需要参数签名的http接口时、http返回值需要参数验证时、异步通知回调时都涉及参数签名解签。
## 2. 签名算法
> 签名生成的通用步骤如下：

1. 第一步，设所有发送或者接收到的数据为集合M，将集合M内非空参数值的参数按照参数名ASCII码从小到大排序（字典序），使用URL键值对的格式（即key1=value1&key2=value2…）拼接成字符串stringA。
特别注意以下重要规则：
参数名ASCII码从小到大排序（字典序）；
如果参数的值为空不参与签名；
参数名区分大小写；
验证调用返回或主动通知签名时，传送的sign参数不参与签名，将生成的签名与该sign值作校验。
接口可能增加字段，验证签名时必须支持增加的扩展字段
2. 第二步，在stringA最后拼接上appsecret得到stringSignTemp字符串，并对stringSignTemp进行MD5运算，再将得到的字符串所有字符转换为大写，得到sign值signValue。

3. 签名方法参考

```js
class Func {
   /**
     * 签名
     * 算法:参数按照ASCILL排序后拼接key,然后md5,最后转为大写
     * @param $data mixed 参数数组
     * @param $secret string 签名密钥 app_secret
     * @return string
     */
    public static function keySign($data, $secret) {
        $unsign_str = Func::createLinkString(Func::argSort($data)) . "&secret=" . $secret;
        $sign = strtoupper(md5($unsign_str));

        return $sign;
    }

    /**
     * 签名验证
     * @param $data mixed 完整的参数数组
     * @param $secret string 签名密钥 app_secret
     * @return bool false-验证失败 true-验证成功
     */
    public static function keyVerifySign($data, $secret) {
        $para = array();
        foreach ($data as $key=>$val) {
            if($key == 'sign') {
                $sign = $val;
            } else {
                $para[$key] = $val;
            }
        }

        if(empty($sign)) {
            return false;
        }

        $unsign_str = Func::createLinkString(Func::argSort($para)) . "&secret=" . $secret;
        $sign_str = strtoupper(md5($unsign_str));

        if($sign === $sign_str) {
            return true;
        }

        return false;
    }

   /**
     * 数组排序 按照ASCII字典升序
     * @param $para mixed 排序前数组
     * @return mixed 排序后数组
     */
    public static function argSort($para) {
        ksort($para);
        reset($para);
        return $para;
    }

    /**
     * 把数组所有元素，按照“参数=参数值”的模式用“&”字符拼接成字符串
     * @param $para mixed 需要拼接的数组
     * @return string 拼接完成以后的字符串
     */
    public static function createLinkString($para) {
        $arg  = "";
        while (list ($key, $val) = each ($para)) {
            if($val === "") {
                continue;
            }
            $arg.=$key."=".$val."&";
        }
        //去掉最后一个&字符
        $arg = substr($arg,0,count($arg)-2);

        //如果存在转义字符，那么去掉转义
        if(get_magic_quotes_gpc()){$arg = stripslashes($arg);}

        return $arg;
    }
}
```