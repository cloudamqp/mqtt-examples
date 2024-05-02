import * as mqtt from "mqtt";
import {} from 'dotenv/config'
import { clientSettings } from '../config.js';


function pubSub() {
    const client = mqtt.connect(
        clientSettings.host, 
        clientSettings.options
    )
  
    client.on('connect', function () {
      console.log("[✅] Connection over channel established")
      
      client.publish('topic/temp', 'Retained Message', { retain: true }, function(err) {
        if (!err) {
          console.log('[📥] Message sent to queue');
        }
      });
      
      client.subscribe('topic/temp',  function (err) {
        if (err) {
          console.log('Could not subscribe: ', err)
        }
      });
    })

    client.on('message', function (topic, message) {
        console.log(topic)
        console.log(message.toString())
    }) 

    client.on('error', function(err) {
      console.log('ERROR: ', err);
      client.end();
    });
}
  

pubSub()

