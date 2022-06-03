const os = require("os");
const whoIam = async (_req, res, _next) => {
  try {
    const healthcheck = {
      uptime: process.uptime(),
      message: "OK",
      timestamp: Date.now(),
      hostname: os.hostname(),
      userInfo: os.userInfo(),
      version: os.version(),
      type: os.type(),
      arch: os.arch(),
      cpus: os.cpus(),
    };

    res.send(healthcheck);
  } catch (error) {
    healthcheck.message = error;
    res.status(503).send();
  }
};

module.exports = whoIam;
