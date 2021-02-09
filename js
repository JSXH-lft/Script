[Rule]
URL-REGEX,^https?:\/\/socketio\.ctrip\.com\/api,REJECT
URL-REGEX,^https?://gw.alicdn.com/(t(f|p)s/.+\d{3,4}-\d{4}|mt),REJECT
URL-REGEX,^https?:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.taobao\.wireless\.home\.splash\.awesome\.get\/,REJECT
URL-REGEX,^https?:\/\/render\.alipay\.com\/p\/s\/h5data\/prod\/spring-festival-2019-h5data\/popup-h5data\.json,REJECT
URL-REGEX,^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.((trip\.activity|film\.mtopadvertiseapi)\.querytmsresources|(taobao\.idle\.home|aliyun\.mobile)\.welcome(page)?|.*?\.ads?\.),REJECT

[Script]
#比价
http-request ^http://.+/amdc/mobileDispatch requires-body=1,script-path=https://raw.githubusercontent.com/chiupam/Proxy/master/Scripts/tb_price.js,tag=淘宝历史比价
http-response ^https?://trade-acs\.m\.taobao\.com/gw/mtop\.taobao\.detail\.getdetail requires-body=1,script-path=https://raw.githubusercontent.com/chiupam/Proxy/master/Scripts/tb_price.js,tag=淘宝历史比价
http-response ^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) requires-body=1,script-path=https://raw.githubusercontent.com/chiupam/Proxy/master/Scripts/jd_price.js,tag=京东历史比价

# > 微信 App 内被屏蔽链接快捷跳转
http-response ^https?:\/\/weixin110\.qq\.com\/cgi-bin\/mmspamsupport-bin\/newredirectconfirmcgi script-path=https://raw.githubusercontent.com/HotKids/Rules/master/Script/weixin110.js,requires-body=1,timeout=10, tag=微信 App 内被屏蔽链接快捷跳转

# BoxJS
http-request ^https?://boxjs.net script-path=https://gitee.com/chavyleung/scripts/raw/master/box/chavy.boxjs.js, requires-body=true, timeout=120, tag=BoxJs.net

# 微信公众号去广告
http-response ^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/Wechat.js, tag=微信公众号去广告

#哔哩哔哩1080+
http-response https:\/\/ap(p|i)\.bilibili\.com\/((pgc\/player\/api\/playurl)|(x\/v2\/account\/myinfo\?)|(x\/v2\/account/mine\?)) script-path=https://raw.githubusercontent.com/Sunert/Scripts/master/Script/Bilibili/BiliHD.js, requires-body=true, timeout=10, tag=BiliHD.js

[URL Rewrite]
# 漫画去广告
^https?:\/\/manga\.bilibili\.com\/twirp\/comic\.v\d\.Comic\/Flash url reject-dict
^https?:\/\/manga\.bilibili\.com\/twirp\/comic\.v\d\.Comic\/ListFlash url reject-dict

[MITM]
hostname = trade-acs.m.taobao.com,api.m.jd.com,weixin110.qq.com,mp.weixin.qq.com,api.bilibili.com
