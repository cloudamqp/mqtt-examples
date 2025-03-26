import * as mqtt from "mqtt";
import {} from 'dotenv/config'
import { clientSettings } from '../config.js';


function publish() {
    const client = mqtt.connect(
        clientSettings.host, 
        clientSettings.options
    )
  
    client.on('connect', function () {
      console.log("[✅] Connection over channel established")

      setInterval(() => {
        client.publish('topic/temp', 'Hello World');
        console.log("[📥] Message sent to queue")
      }, 1000)
    })

    client.on('error', function(err) {
      console.log('ERROR: ', err);
      client.end();
    });
}
  

publish()

