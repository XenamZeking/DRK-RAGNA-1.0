//#ENJOY BRO😍
// Credit: 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨 by      𝙎-𝙏𝞢𝞜
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sandrk766@gmail.com";
global.location = "Port-au-Prince, Haiti";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null"; 
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://testbot_2m27_user:Az7LOxZBevfQ7qiZ2aKDwQ4325uumm4v@dpg-crngb4o8fa8c738fs4b0-a.oregon-postgres.render.com/testbot_2m27";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Bot-hostin/DRK-RAGNA-1.0";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vRR63CN.jpeg,https://i.imgur.com/ovCfp9J.jpeg,https://i.imgur.com/edzo5dj.jpeg";
global.devs = "https://wa.me/50931461936 , https://wa.me/50931461936";
global.sudo = process.env.SUDO || "50931461936";
global.owner = process.env.OWNER_NUMBER || "237674344938";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/yBSoUuw.jpeg,https://i.imgur.com/XrUDzUl.jpeg,https://i.imgur.com/edjZiEx.jpeg,https://i.imgur.com/cdS2R7I.jpeg,https://i.imgur.com/u9FxdwH.jpeg,https://i.imgur.com/HEFIrto.jpeg,https://i.imgur.com/Fc0gIpE.jpeg,https://i.imgur.com/iaJtsma.jpeg,https://i.imgur.com/17yE9Uy.jpeg,https://i.imgur.com/ERGVvpZ.png"
global.waPresence = process.env.WAPRESENCE || " ";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://drk-tech-2.onrender.com/;
global.scan = "https://drk-tech-2.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkU5b1hrZTRTd3hFVmVzQTl1MGhTcUNTNWNYTUlFQWFUUHNTai9CcHAyRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXorbm1OMEliOWRnRTZ6TW56cDZYSFNUM01RWGFrZzJZWFUwZVNDZldTRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQmlCRkxUNjB5REdERWEybnZuNnp0WjhTdmhQdVRLWFJ3TlB4eFNnTjBVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0UStaMy9VUS90NmxXQUFXa2U5a1gzYm5nRElGdS9uSUNCZDV3SndwTm44PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdFT0t5U25LWW9qbTZ6UjVRejdUOEN1TGNPYm1EYnZuMDBWWWdZQlpCM0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkovZUtMRm5QdzVLQ1UxSmJsanVKdVp6OGY5YkRvY1pFSXN6aFdpbmozU289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0pLd1V4eTU3UDNRUEZtQ2RKM2MwREo4SlFaYWdYT0VtRHZBZmxGazhrQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2MzUjFhcEhmajJ6dmxsTXZUMmxXcEVFTVVHaFZqdVV0eFkzZWtmeE5FVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlE3U1hMY1pMcUtHaEtjMkxWc2ZDNFRMNlZmc2R1aVhoeTlWbFo4eW9pblE4VEVhOUNxTjhTQ2tLV0xtUlhlKzVGYUJRemI4S3UwQndoMjloSzlnZGhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzksImFkdlNlY3JldEtleSI6Ik1JMlM3U0dzZER5YnJlT3RNSnd2MWU2U21uRktOUy8yNnp5eEk5clhVcHc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjNtZWl3dFZpUXZLbGRwOFNwQTRWdVEiLCJwaG9uZUlkIjoiZDM1MmU4ZjEtNDdiMy00MDZjLWIwNTEtYWQ0MDUwOGFmZjNjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxEQ1ZRWnZ2aXp3eVRFY01kRytpY1FvT2M5RT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpbFFtanNXcFBkRS9BOUVMSHhCVlhwbDhGMWc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiR0M4TEI2VkoiLCJtZSI6eyJpZCI6IjIzNzY3NDM0NDkzODoyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJcWpxb01CRU1QSHRMd0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJZQVlNVTBUc3NZeVdkeTFWcVEwY2VXRWxiVXh6cXZ2QUZzbEZqYzFJWFIwPSIsImFjY291bnRTaWduYXR1cmUiOiJOWlJWa09nbHYyM3Y4OU93YW0xeVZ6TFJUQjdDMDRLaExZcWhoVHJDQ1ZSWmhvMXVwdjVRVC9yQVJTY1o1MGFHdWV0N0ZRbHRXUXhBOGxkR0RDcEhBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRUhNd3c5eXk4bFZXMmI1ME5xcmxQTSsxSFdCR1B3MlZScHZZVTVEV0FiNU1CeVBEeW9WeFQ4eXZwbk0zd0QvQ2dlVjZPTnB3ZlE1WTBONFFPSkV5alE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzc2NzQzNDQ5Mzg6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXQUdERk5FN0xHTWxuY3RWYWtOSEhsaEpXMU1jNnI3d0JiSlJZM05TRjBkIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM3MzAyOTkyfQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨`",
  author: process.env.PACK_AUTHER || " 𝙎-𝙏𝞢𝞜",
  packname: process.env.PACK_NAME || "𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨",
  botname: process.env.BOT_NAME || "ST┘𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨𖤐",
  ownername: process.env.OWNER_NAME || "🌹⃟⃢👑 ĐÆ𝚪𝐊༒𝙎-𝙏𝞢𝞜🌹⃟⃢👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "STEN").toUpperCase(),
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
