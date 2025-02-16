

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://Mavuika:gaxkyg-zarhE9-jebtub@cluster0.imlrb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "Genshin Impact", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/VtJvNMM6Xj",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
    {
        "identifier": "Muzykant v4",
        "host": "lavalink_v4.muzykant.xyz",
        "port": 80,
        "password": "https://discord.gg/v6sdrD9kPh",
        "secure": false,
        "restVersion": "v4",
        "authorId": "719878365640916993"
    },
    {
        "identifier": "INZEWORLD.COM (DE)",
        "host": "lava.inzeworld.com",
        "port": 3128,
        "password": "saher.inzeworld.com",
        "secure": false,
        "restVersion": "v4",
        "authorId": "454863447344021515"
    },
    {
        "identifier": "ChalresNaig Node",
        "host": "lavahatry4.techbyte.host",
        "port": 3000,
        "password": "NAIGLAVA-dash.techbyte.host",
        "secure": false,
        "restVersion": "v4",
        "authorId": "573709909594734603"
    },
    {
        "identifier": "Public Lavalink v4",
        "host": "lava-v4.ajieblogs.eu.org",
        "port": 443,
        "password": "https://dsc.gg/ajidevserver",
        "secure": true,
        "restVersion": "v4",
        "authorId": "867303900884893727"
    },
    {
        port: 3000,
        password: "saher.inzeworld.com",
        host: "lava.inzeworld.com",
        port: 3128,
        secure: false
    },
    {
        "identifier": "Public Lavalink v4 NonSSL",
        "host": "lava-v4.ajieblogs.eu.org",
        "port": 80,
        "password": "https://dsc.gg/ajidevserver",
        "secure": false,
        "restVersion": "v4",
        "authorId": "867303900884893727"
    }  
  ]
}
