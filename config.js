const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="the256genius@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://wa.me/qr/B5J7SDCQZ25UF1";
global.website=process.env.GURL || "https://wa.me/qr/B5J7SDCQZ25UF1" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "256754370702" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "256754370702";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256754370702";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,256xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "256754370702,256xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_39_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODEsXG4gICAgICAgIDk0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDkzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg1LFxuICAgICAgICA3MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3LFxuICAgICAgICA5NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg1LFxuICAgICAgICA2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNixcbiAgICAgICAgNTUsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgODIsXG4gICAgICAgIDczLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMyxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDkzLFxuICAgICAgICA1NixcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgxLFxuICAgICAgICA2MCxcbiAgICAgICAgODksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ0LFxuICAgICAgICA3OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgyLFxuICAgICAgICA4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDMxLFxuICAgICAgICA4NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDk4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODksXG4gICAgICAgIDE2LFxuICAgICAgICA1NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjExLFxuICAgICAgICAzOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMixcbiAgICAgICAgMjIxLFxuICAgICAgICA4NixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgODgsXG4gICAgICAgIDcxLFxuICAgICAgICA0NSxcbiAgICAgICAgOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MixcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkZrUVhyTjJ3TWFGQlp1NjhrZ3V1Z1RqbGIzSFZVY1hCdlhSZjEzQUJIcms9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU2NzU0MzcwNzAyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3NEREMUQyMkVEMEU0RjJEMUIxNzNFNkUxRDZEQkI2N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI1NDgzOTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaF90dVh1Rk1ROXlpdnVQQUhteFlPQVwiLFxuICBcInBob25lSWRcIjogXCIzNTlmODRkZi1kN2VmLTQ2MjEtODhlMi05YjNmYWRmNzdhMmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzYsXG4gICAgICAzMSxcbiAgICAgIDgzLFxuICAgICAgMjI2LFxuICAgICAgMzgsXG4gICAgICAxMDgsXG4gICAgICAyNDcsXG4gICAgICAyNTAsXG4gICAgICA3OSxcbiAgICAgIDE2NSxcbiAgICAgIDYsXG4gICAgICA3NixcbiAgICAgIDMyLFxuICAgICAgODksXG4gICAgICAyMCxcbiAgICAgIDE0MixcbiAgICAgIDEwNixcbiAgICAgIDE3LFxuICAgICAgMTMzLFxuICAgICAgMjA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0OCxcbiAgICAgIDYyLFxuICAgICAgMzIsXG4gICAgICA1NixcbiAgICAgIDI5LFxuICAgICAgMTkyLFxuICAgICAgMTM3LFxuICAgICAgMjE5LFxuICAgICAgNDksXG4gICAgICA3MyxcbiAgICAgIDE5OCxcbiAgICAgIDE4MixcbiAgICAgIDIzMixcbiAgICAgIDk5LFxuICAgICAgMTQ1LFxuICAgICAgMTY2LFxuICAgICAgMTc2LFxuICAgICAgODUsXG4gICAgICA2MCxcbiAgICAgIDc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZITDFKRTk4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NTQzNzA3MDI6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjgxMjg2NjUxNzE1NzYzOjE3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0x5aWdZSUdFS0NCc0xVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiby9LTUdmN1pvZ0J5bWRZYUs1VW1IRUxxNjFGbFJ5RzNNdmZVaHVkRkFrQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuS1Btb3pzL00rd1BVTStzN2V4SVFxWnp0Q1BoZUVPOFcyOXBiN3FhZTdCREMzV3hJdzZwUzhPcG8rMjFYRVR3bFJkMEdvLzNNclJTS0ZHcWpyeCtEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1WkhWYkh1Tzd1dVV4UjdIcWN5MVpLbHdhclZXQS9lblN3cjZPbHRFMFRwZE1VeE93VlIvUnN4a1BQZ3lIL1JRdHpnNFZMdzZkZjdvbW95M05DVWZCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3NTQzNzA3MDI6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjU0ODM4NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNxQ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ3FDLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNUt2YS9HZjJETDJTMTh2bHdDVjQxZlg4N0NFZS8wU1dEeTFOQnhGNTlZUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjE0ODI3ODI4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "the256genius",
  ownername:process.env.OWNER_NAME|| "the256genius",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "...e29c";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
