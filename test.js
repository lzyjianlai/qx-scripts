// 测试脚本 - 如果看到这个说明脚本加载成功
$done({
  title: "✅ 脚本已加载",
  subtitle: "IPinfo Lite Test",
  ip: "test",
  description: "如果你看到这条消息，说明脚本加载成功！\n响应内容: " + $response.body
});
