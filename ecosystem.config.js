module.exports = {
  apps: [
    {
      name: "my-app",
      script: "./server.js",
      args: "",
      //   env: {
      //     NODE_ENV: "production",
      //   },
      //   instances: 4, // 集群模式启动 4 个实例
      //   exec_mode: "cluster", // 集群模式
      //   watch: true, // 文件变化自动重启
    },
  ],
};
