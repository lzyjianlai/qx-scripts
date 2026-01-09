/*
 * ipapi.co for Quantumult X
 * 国内可直接访问，ASN 准确
 *
 * 配置方法：
 * [general]
 * geo_location_checker=https://ipapi.co/json/, https://cdn.jsdelivr.net/gh/lzyjianlai/qx-scripts@master/ipapi.js
 */

var cityMap = {
  "Los Angeles": "洛杉矶", "San Jose": "圣何塞", "San Francisco": "旧金山",
  "Seattle": "西雅图", "New York": "纽约", "Chicago": "芝加哥",
  "Dallas": "达拉斯", "Miami": "迈阿密", "Denver": "丹佛",
  "Phoenix": "凤凰城", "Las Vegas": "拉斯维加斯", "Atlanta": "亚特兰大",
  "Boston": "波士顿", "Washington": "华盛顿", "Houston": "休斯顿",
  "Portland": "波特兰", "Austin": "奥斯汀", "San Diego": "圣地亚哥",
  "Philadelphia": "费城", "Ashburn": "阿什本", "Fremont": "弗里蒙特",
  "Palo Alto": "帕洛阿尔托", "Santa Clara": "圣克拉拉", "Irvine": "尔湾",
  "Sacramento": "萨克拉门托", "Salt Lake City": "盐湖城", "Honolulu": "檀香山",
  "Sunnyvale": "桑尼维尔", "Mountain View": "山景城", "Cupertino": "库比蒂诺",
  "Oakland": "奥克兰", "Berkeley": "伯克利", "Pasadena": "帕萨迪纳",
  "Long Beach": "长滩", "Anaheim": "阿纳海姆", "Santa Monica": "圣莫尼卡",
  "Tokyo": "东京", "Osaka": "大阪", "Nagoya": "名古屋", "Yokohama": "横滨",
  "Fukuoka": "福冈", "Sapporo": "札幌", "Kobe": "神户", "Kyoto": "京都",
  "Hiroshima": "广岛", "Sendai": "仙台", "Chiba": "千叶", "Naha": "那霸",
  "Kawasaki": "川崎", "Kitakyushu": "北九州", "Nagasaki": "长崎", "Nara": "奈良",
  "Seoul": "首尔", "Busan": "釜山", "Incheon": "仁川", "Daegu": "大邱",
  "Daejeon": "大田", "Gwangju": "光州", "Suwon": "水原", "Jeju": "济州",
  "Chuncheon": "春川", "Ulsan": "蔚山", "Changwon": "昌原", "Seongnam": "城南",
  "Singapore": "新加坡",
  "Hong Kong": "香港", "Central": "中环", "Kowloon": "九龙",
  "Taipei": "台北", "Taichung": "台中", "Kaohsiung": "高雄", "Tainan": "台南",
  "Taoyuan": "桃园", "Hsinchu": "新竹", "Keelung": "基隆", "New Taipei": "新北",
  "Frankfurt": "法兰克福", "Berlin": "柏林", "Munich": "慕尼黑",
  "Hamburg": "汉堡", "Cologne": "科隆", "Stuttgart": "斯图加特",
  "Dusseldorf": "杜塞尔多夫", "Nuremberg": "纽伦堡", "Hanover": "汉诺威",
  "London": "伦敦", "Manchester": "曼彻斯特", "Birmingham": "伯明翰",
  "Paris": "巴黎", "Marseille": "马赛", "Lyon": "里昂",
  "Amsterdam": "阿姆斯特丹", "Rotterdam": "鹿特丹",
  "Sydney": "悉尼", "Melbourne": "墨尔本", "Brisbane": "布里斯班", "Perth": "珀斯",
  "Toronto": "多伦多", "Vancouver": "温哥华", "Montreal": "蒙特利尔",
  "Moscow": "莫斯科", "Saint Petersburg": "圣彼得堡",
  "Dubai": "迪拜", "Abu Dhabi": "阿布扎比",
  "Mumbai": "孟买", "Delhi": "德里", "Bangalore": "班加罗尔",
  "Bangkok": "曼谷", "Pattaya": "芭提雅", "Chiang Mai": "清迈",
  "Ho Chi Minh City": "胡志明市", "Hanoi": "河内",
  "Kuala Lumpur": "吉隆坡", "Penang": "槟城",
  "Manila": "马尼拉", "Cebu City": "宿务",
  "Jakarta": "雅加达", "Bali": "巴厘岛"
};

var countryMap = {
  "US": "美国", "JP": "日本", "KR": "韩国", "SG": "新加坡",
  "HK": "香港", "TW": "台湾", "DE": "德国", "GB": "英国",
  "FR": "法国", "NL": "荷兰", "AU": "澳大利亚", "CA": "加拿大",
  "RU": "俄罗斯", "IN": "印度", "BR": "巴西", "TH": "泰国",
  "VN": "越南", "MY": "马来西亚", "PH": "菲律宾", "ID": "印尼",
  "IT": "意大利", "ES": "西班牙", "CH": "瑞士", "SE": "瑞典",
  "AE": "阿联酋", "TR": "土耳其", "CN": "中国", "MO": "澳门"
};

var regionMap = {
  "California": "加利福尼亚州", "Texas": "得克萨斯州", "New York": "纽约州",
  "Florida": "佛罗里达州", "Washington": "华盛顿州", "Oregon": "俄勒冈州",
  "Nevada": "内华达州", "Arizona": "亚利桑那州", "Colorado": "科罗拉多州",
  "Georgia": "佐治亚州", "Virginia": "弗吉尼亚州", "Illinois": "伊利诺伊州",
  "Massachusetts": "马萨诸塞州", "Pennsylvania": "宾夕法尼亚州",
  "Ohio": "俄亥俄州", "Michigan": "密歇根州", "New Jersey": "新泽西州",
  "Hawaii": "夏威夷州", "Alaska": "阿拉斯加州", "Utah": "犹他州"
};

var flags = new Map([
  ["US", "🇺🇸"], ["JP", "🇯🇵"], ["KR", "🇰🇷"], ["SG", "🇸🇬"],
  ["HK", "🇭🇰"], ["TW", "🇹🇼"], ["DE", "🇩🇪"], ["GB", "🇬🇧"],
  ["FR", "🇫🇷"], ["NL", "🇳🇱"], ["AU", "🇦🇺"], ["CA", "🇨🇦"],
  ["RU", "🇷🇺"], ["IN", "🇮🇳"], ["BR", "🇧🇷"], ["TH", "🇹🇭"],
  ["VN", "🇻🇳"], ["MY", "🇲🇾"], ["PH", "🇵🇭"], ["ID", "🇮🇩"],
  ["IT", "🇮🇹"], ["ES", "🇪🇸"], ["CH", "🇨🇭"], ["SE", "🇸🇪"],
  ["AE", "🇦🇪"], ["TR", "🇹🇷"], ["CN", "🇨🇳"], ["MO", "🇲🇴"]
]);

try {
  var obj = JSON.parse($response.body);

  var countryCode = obj.country_code || obj.country || "";
  var flag = flags.get(countryCode) || "🏳️";
  var cityCN = cityMap[obj.city] || obj.city || "";
  var countryCN = countryMap[countryCode] || obj.country_name || "";
  var regionCN = regionMap[obj.region] || obj.region || "";
  var org = obj.org || "Unknown";
  var asn = obj.asn || "";
  var ip = obj.ip || "";

  var title = flag + " " + cityCN;
  var subtitle = org;
  var description = "城市: " + cityCN + "\n" +
                    "地区: " + regionCN + "\n" +
                    "国家: " + countryCN + "\n" +
                    "ASN: " + asn + " " + org + "\n" +
                    "IP: " + ip;

  $done({title: title, subtitle: subtitle, ip: ip, description: description});
} catch (e) {
  $done({title: "❌ 解析错误", subtitle: e.message, ip: "", description: "错误: " + e.message});
}
