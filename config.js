//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "2347026742398";
global.owner = process.env.OWNER_NUMBER || "2347026742398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUFqTzVNdnB3K3ExWVVwZE5uUnFaUUxWZ1VTTzkrM21YbkpHdXhMOVIzRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSXAzZkhzZGVNMDhncWFsS2J0UmtNaGJpK2tmeXZnZmNOa245S20xQTBWdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTHNTeE5jN2lsUENpdmEvVmd4djR5NVNJcUhLSXAvUm9sWXFsbWZma25rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4R1RiRktGaEtieGpTR1JEdFJ4Q0RMdTJXWEI4SVh6ZW9Ic0NkTGpmYWtzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVEekN2c2o5ZFpNV21QT1NJdGo5clVEWWVwRkRlNWljeTJuL0dDYWF4MEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdwL1RZcVNTdmhZWDAvdDhIWmRUYTUzbTNOb2J6YUdrekNsZlkxaGczMEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEhlWWcrN0RldW9sek42bFVTYmpWSGpPMnpJNkQ2eVY0MC9QMnVvT2dXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2RidmxDSU1hektKV041SUFsTTZGV3hqVys3TGdyWnNXR1MycUhNbktSWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlAyWUFLamVpVXJOT0NyRUVrOVNyQzFkVlBkNG1Cd1NHY0hiQW92UUwzRVQzeHE0N3NZaitGd3BadUtlZFdzaURzQjg4SWRCUnRRb1UyVmZTenpqVWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NywiYWR2U2VjcmV0S2V5IjoiSVJ3NzhMYVoxbWw3dC9jN3pFcHROdElFKzNMSHlGYndqZG5IMWwxRkFuND0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiSUJxOEtSODFRc2FMU2xMTW5zVEZ0USIsInBob25lSWQiOiI4YTQ2NjM3NS0zYTliLTQ1MzItYjhkOS00Y2UzNGE0MDMyYjQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmtsamR5K0JDRFFxTVNsYXJXS3k1UFh0cU5jPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjkweHpYT3YwVmZIRHMvUXNkVytEN3hxLzlYdz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJNU0JSUThNTSIsIm1lIjp7ImlkIjoiMjM0NzAyNjc0MjM5ODo0M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJGaW5lc3NlIE1lZGlhIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOVHN0S0FIRUluRDM3Y0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIySkdzbUJOS2tWZkcrRW14RTVGSmVMcDlVaVZ2K3djeENYTkIzWXh2U1JJPSIsImFjY291bnRTaWduYXR1cmUiOiJmMGRubDBXcyt0T3NCcC8rcWIzYm9zdGJvWklDdzZZSHRHWmNBa2N5OEd4NEkzeDFiQmZ3c3NQbGRHeUowWE9IQmI2K24yUmx4RFIreXk0VDF3dnFBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiL0NRT0ZaTlZkZllFRjhKMjJwSFdzUGIwTjd5N0hpSmgxL3J4Ym1zcGxOelovSi83T1lwYm9EcHFtYUJUUEtCUzlFWnRnWjlmK29WSU1UZlF0WlI1Z2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDI2NzQyMzk4OjQzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRpUnJKZ1RTcEZYeHZoSnNST1JTWGk2ZlZJbGIvc0hNUWx6UWQyTWIwa1MifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjc1MjExNzQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSlNrIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
