const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();
require('dotenv').config();

const config = {
  user: process.env.FTP_USER,
  password: process.env.FTP_PASS,
  host: process.env.FTP_HOST,
  port: 21,
  localRoot: __dirname + "/dist",
  remoteRoot: "/httpdocs/pages/kunstkanne/nuxt/",
  deleteRemote: true,
  forcePasv: true,
};

ftpDeploy
  .deploy(config)
  .then(res => console.log("finished:", res))
  .catch(err => console.log(err)); 