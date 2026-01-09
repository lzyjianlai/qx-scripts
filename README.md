# Quantumult X Scripts

## IPinfo Lite

使用 IPinfo Lite API 的 Quantumult X 地理位置检查脚本，能正确显示 DMIT、搬瓦工等 VPS 提供商的 ASN 信息。

### 配置方法

在 Quantumult X 配置文件中添加：

```ini
[general]
geo_location_checker=https://api.ipinfo.io/lite/me?token=YOUR_TOKEN, https://raw.githubusercontent.com/YOUR_USERNAME/qx-scripts/main/IPinfo_Lite.js
```

### 功能

- 显示国家/地区旗帜
- 显示 ASN 运营商名称（如 DMIT Cloud Services）
- 显示 IP 地址和地理信息

### 支持的国家旗帜

🇦🇨 🇦🇪 🇦🇺 🇨🇦 🇨🇭 🇨🇳 🇩🇪 🇫🇷 🇬🇧 🇭🇰 🇮🇩 🇮🇳 🇯🇵 🇰🇷 🇲🇴 🇲🇾 🇳🇱 🇵🇭 🇷🇺 🇸🇬 🇹🇭 🇹🇼 🇺🇸 🇻🇳
