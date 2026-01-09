var obj = JSON.parse($response.body);
var flags = new Map([["AC","🇦🇨"],["AE","🇦🇪"],["AU","🇦🇺"],["CA","🇨🇦"],["CH","🇨🇭"],["CN","🇨🇳"],["DE","🇩🇪"],["FR","🇫🇷"],["GB","🇬🇧"],["HK","🇭🇰"],["ID","🇮🇩"],["IN","🇮🇳"],["JP","🇯🇵"],["KR","🇰🇷"],["MO","🇲🇴"],["MY","🇲🇾"],["NL","🇳🇱"],["PH","🇵🇭"],["RU","🇷🇺"],["SG","🇸🇬"],["TH","🇹🇭"],["TW","🇹🇼"],["UK","🇬🇧"],["US","🇺🇸"],["VN","🇻🇳"]]);
var flag = flags.get(obj.country_code) || "🏳️";
var org = obj.as_name || "Unknown";
var title = flag + " " + obj.country;
var subtitle = org;
var ip = obj.ip;
var description = obj.country + " | " + obj.continent + "\n" + obj.asn + " - " + org + "\nIP: " + ip;
$done({title: title, subtitle: subtitle, ip: ip, description: description});
