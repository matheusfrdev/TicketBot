module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {

        console.log(`        
        
        █   █ █▀▀█ █▀▀▀ █    █   █ █   █
        ██░▒█ █▄▄█ █▀▀▀ █░░░ █░░▒█ █░░▒█
        █▒█▒█ █  █ █    █░░░ █▄▄▄█ █▄▄▄█
        █░░▀█ █░▒█ █░░░ █▄▄█ ░▒█░░ ░▒█░░ V1.0`)




    let green = '\x1b[32m',
    colorful = (color, string, reset = '\x1b[0m') => color + string + reset
    console.log(colorful(green, 
        
`✅ - [BOT] online! |${client.user.username}    
                      
✔ https://github.com/matheusfrdev O `))   




        var compteurStatus = 1
        setInterval(async () => {
            status =  [`Ticket Bot OpenSource`]
            compteurStatus = (compteurStatus + 1) % (status.length);
            client.user.setPresence({
                activities: [{
                    name: `${status[compteurStatus]}`,
                    type: "STREAMING",
                    url: "https://www.twitch.tv/naflyyyy"
                }],
                  status: "streaming"})
        }, 5000);
    }
}
