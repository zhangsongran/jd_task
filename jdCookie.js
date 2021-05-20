/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  'shshshfpa=73ddf228-8f7e-9919-87bb-566fcdcf4f18-1617083865; shshshfpb=fHI6bYCTlYMycsE8wFcjnmg%3D%3D; __jdu=16170838576572059322449; areaId=16; ipLoc-djd=16-1315-3486-59642; pinId=IZ_SM95vsrQTeARHRkZ2xQ; pin=%E5%B5%A9%E7%84%B6%E7%84%B6%E7%84%B6%E7%84%B6; unick=jd_%E9%9D%99%E8%B0%A7; _tp=odJvT18JAsXlFEyTUtl6DdkPFDNpGaMJlggLK%2F%2Bqs8VkuWHJO9IBAFKgD80G04lT; _pst=%E5%B5%A9%E7%84%B6%E7%84%B6%E7%84%B6%E7%84%B6; PCSYCityID=CN_350000_350200_350206; TrackID=1fJSeWahAtp0j2_mzJGRSxT97asqHfOeD1CxK6wm7cjltpspXUllM2qkPzsMyRUHZZsFh29OhrSm_dhE17JDLZyR1THUhCDGhY0pephziv0o; unpl=V2_ZzNtbRJeQhAlCkZRfhhYA2IBQlgRA0dGJwBPA3IQWQVuABZYclRCFnUUR1BnGl0UZgsZX0JcQxJFCEdkeBBVAWMDE1VGZxBFLV0CFSNGF1wjU00zQwBBQHcJFF0uSgwDYgcaDhFTQEJ2XBVQL0oMDDdRFAhyZ0AVRQhHZHseXANmChBURlFEEXMLR1BzG18GYgYabXJQcyVFDE9SexpbNWYzE20AAx8WcgpEVH1UXAJnBRNUQF5HE3IMQFd6HVQHZAAXWEpnQiV2; __jdv=76161171|baidu-pinzhuan|t_288551095_baidupinzhuan|cpc|0f3d30c8dba7459bb52f2eb5eba8ac7d_0_a804a314405743a4be5bc98f88418254|1621474280097; __jda=76161171.16170838576572059322449.1617083857.1620961387.1621474280.11; __jdc=76161171; wxa_level=1; retina=1; cid=9; jxsid=16214742844321234045; webp=1; mba_muid=16170838576572059322449; visitkey=12180494281995417; OUTFOX_SEARCH_USER_ID_NCOO=577688443.0277964; TrackerID=P_kBmWDhvF3fznnlMXY8Wc4IK37McHsvPnD5kxrOEIyiXz6RGG2egZ5YVvyfVvKaDKzoVVvcqQgJasxtSuKXCq4iU4432I_KLoRfSbyzsdr2Um_APEFQwSO6rll0-U7rboz-hYUvabNjeGJ-zgXu6w; pt_key=AAJgpbx3ADAhmt8n-XqhCbWvsonC-KpFggC54KFgPSz5jzbHcDlO1YI-zRbMlqMKDlfnhGBGQOI; pt_pin=%E5%B5%A9%E7%84%B6%E7%84%B6%E7%84%B6%E7%84%B6; pt_token=jga7csw9; pwdt_id=%E5%B5%A9%E7%84%B6%E7%84%B6%E7%84%B6%E7%84%B6; sfstoken=tk01mbf0c1bb8a8sMiszKzF4Mngy3vgI4dZTBSxNQY9B3OTvxA7wShiItUib/VaX9ba+Xh1s5ek11IYTAH99f7/vU/St; 3AB9D23F7A4B3C9B=HDA56VP3OUWH3LQQTXUP7QU2W6JCLECSKSKJH6B5DFIFUJJKPNHJXZ25RCRGTUJGLL7IKIO2Q3WTAS5GBV4BK67PJE; wqmnx1=MDEyNjM4NHMubWVjZSYxMjcvaFUgX00pZTVLaW9vMy9TMDM3YTVXRFUp; __jdb=76161171.5.16170838576572059322449|11.1621474280; mba_sid=16214742847025967876771348799.4; __wga=1621474851461.1621474851461.1621474851461.1621474851461.1.1; PPRD_P=UUID.16170838576572059322449; jxsid_s_t=1621474851522; jxsid_s_u=https%3A//home.m.jd.com/myJd/newhome.action; sc_width=414; shshshfp=669e2127b0fedea843bb1e5d46845947; shshshsID=59875c00765f6ddb23a1346064ccd405_3_1621474851876'
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {女装盲盒抽京豆
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
}
CookieJDs = [...new Set(CookieJDs.filter(item => item !== "" && item !== null && item !== undefined))]
console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}