import * as mqtt from "mqtt";
import {} from 'dotenv/config'
import { clientSettings } from '../config.js';


function pubSub() {
    const client = mqtt.connect(
        clientSettings.host, 
        clientSettings.options
    )
    const topic = "temp"
  
    client.on('connect', function () {
      console.log("[✅] Connection over channel established")

      client.subscribe('topic/temp',  function (err) {
        if (err) {
          console.log('Could not subscribe: ', err)
        }
      })
    })

    client.on('message', function (topic, message) {
        console.log(message.toString())
    })

    client.on('error', function(err) {
      console.log('ERROR: ', err)
      client.end();
    });
}
  

pubSub()