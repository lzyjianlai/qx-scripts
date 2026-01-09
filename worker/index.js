export default {
  async fetch(request) {
    const clientIP = request.headers.get('CF-Connecting-IP') || '8.8.8.8';
    const token = 'f696fdc610eda3';
    const ipinfoURL = `https://api.ipinfo.io/lite/${clientIP}?token=${token}`;

    try {
      const response = await fetch(ipinfoURL);
      const data = await response.json();

      const result = {
        status: "success",
        country: data.country || "Unknown",
        countryCode: data.country_code || "",
        region: data.continent_code || "",
        regionName: data.continent || "",
        city: data.country || "Unknown",
        zip: "",
        lat: 0,
        lon: 0,
        timezone: "",
        isp: data.as_name || "Unknown",
        org: data.as_name || "Unknown",
        as: (data.asn || "") + " " + (data.as_name || ""),
        query: data.ip || clientIP
      };

      return new Response(JSON.stringify(result), {
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (e) {
      return new Response(JSON.stringify({ status: "fail", message: e.message }), { status: 500 });
    }
  }
};
