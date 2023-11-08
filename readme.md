# Facebook Bot Setup Guide

This guide will walk you through the process of setting up a Facebook bot that saves all messages to a .txt file using Node.js and the Facebook Chat API.

## Prerequisites

Before you begin, you'll need to have the following installed on your system:

- Node.js: You can download it from the [official Node.js website](https://nodejs.org/).

## Setup

1. **Create a new directory for your project and navigate into it.**

shell: mkdir facebook-bot && cd facebook-bot


2. **Initialize a new Node.js project.**

shell: npm init -y


  This will create a new `package.json` file in your project directory.

3. **Install the Facebook Chat API.**

shell: npm install facebook-chat-api


4. **Create a new file named `bot.js`.**

  This file will contain the code for your bot. You can create it using a text editor or from the terminal:

shell: touch bot.js


5. **Open `bot.js` in your text editor and add the following code:**

javascript const fs = require('fs'); const login = require('facebook-chat-api');

// Log in to the Facebook bot login({email: 'FB_EMAIL', password: 'FB_PASSWORD'}, (err, api) => { if(err) { return console.error(err); }

  // Set up the message handler
  api.listen((err, message) => {
      if(err) {
          return console.error(err);
      }

      // Save the message to a .txt file
      fs.appendFile('messages.txt', `${message.body}\n`, (err) => {
          if(err) {
             return console.error(err);
          }

          console.log('The message was saved to the file!');
      });
  });

});


  Replace `'FB_EMAIL'` and `'FB_PASSWORD'` with the email and password of the Facebook account you're using for the bot.

## Running the Bot

1. **Start the bot by running the following command in your terminal:**

shell: node bot.js


  Your bot should now be running. It will save all incoming messages to a file named `messages.txt`.

## Note

This bot does not distinguish between different types of messages (text, images, stickers, etc.) and will only capture the content of the message. If the message is an image or sticker, the bot will save the sticker ID or image URL. The bot also does not distinguish between different senders, so all messages will be saved in the same file without indicating who sent each message. If you need these functionalities, you will need a more complex bot implementation.

## Disclaimer

This bot does not discriminate between different types of messages (text, images, stickers, etc.) and will only capture the content of the message. If the message is an image or sticker, the bot will save the sticker ID or image URL. The bot also does not distinguish between different senders, so all messages will be saved in the same file without indicating who sent each message. If you need these functionalities, you will need a more complex bot implementation.