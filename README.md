# Anko

Basically called CBot on Github because of the previous name, Anko is a simple Javascript bot.

## Installation and running (Windows)

### Requirements
You will need Nodejs. Installation: https://nodejs.org/dist/v14.17.4/node-v14.17.4-x64.msi // For other platforms, just go to https://nodejs.org/ and choose your platform by clicking "Other Downloads".
![chrome_mY1RZnZr2F](https://user-images.githubusercontent.com/76608613/127999616-7cc00ce4-7f61-41f7-ae71-12ccb4f38949.png)

You will need a code editor. Visual Studio Code is good enough. Download it on https://code.visualstudio.com/
![chrome_VMCu9gHRo4](https://user-images.githubusercontent.com/76608613/127999498-2dff368b-c9c3-4d21-93a6-32bd0512b2a9.png)

You will need a Discord Bot created on https://discord.com/developers/applications.
After that, invite the bot to your server, and copy the token, you will need it to run the script. (I won't explain here how you invite a bot and how you get the token, there are a lot of tutorials on youtube).

### Installation

First of all you need to download the zip of the latest release, and extract it.
Then you will need to open a command prompt (powershell is better).

Run the following commands:
```bash
~$ cd PATH\TO\THE\BOT\FOLDER
~$ npm install
```
*Replace PATH\TO\THE\BOT\FOLDER with the path where were the bot files extracted.*

### Running

Open the *main.js* file with your code editor.

Search for these two lines:
```javascript
const prefix = PROCESS.ENV.PREFIX;
bot.login(PROCESS.ENV.BOT_TOKEN);
```

Replace the `PROCESS.ENV.PREFIX` with `"%"`. This will be the prefix of the bot. I do not advise you to set another prefix, because the bot configuration displays that prefix, like in the help command.

Replace the `PROCESS.ENV.BOT_TOKEN` with the token of your bot. Don't forget that you need to quote it! Otherwise it won't work.

Your two lines should look like this now:

```javascript
const prefix = "%";
bot.login("your_token");
```

Then save the file by pressing `CTRL+S`

Go to your command prompt, verify that you're in the bot folder, and then run this command:
```bash
~$ node ./main.js
```

And it should be good. If the bot is on, the console will return 
```shell
Anko est en ligne.
```
Which means "Anko is online" in French.

If you have any issues, please come in my Discord Server, Loisu Tea Time: https://dsc.gg/loisu

### Enjoy!



