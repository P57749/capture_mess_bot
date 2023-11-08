const fs = require('fs');
const login = require('facebook-chat-api');

// Inicia sesión en el bot de Facebook
login({email: 'FB_EMAIL', password: 'FB_PASSWORD'}, (err, api) => {
    if(err) {
        return console.error(err);
    }

    // Configura el controlador de mensajes
    api.listen((err, message) => {
        if(err) {
            return console.error(err);
        }

        // Guarda el mensaje en un archivo .txt
        fs.appendFile('messages.txt', `${message.body}\n`, (err) => {
            if(err) {
                return console.error(err);
            }

            console.log('El mensaje se ha guardado en el archivo!');
        });
    });
});
