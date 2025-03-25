import {} from 'dotenv/config'


const clientSettings = {
    host: process.env.MQTT_BROKER,
    options: {
        keepalive: 0,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        connectTimeout: 60000,
        reconnectPeriod: 20000,
        rejectUnauthorized: false
    }
}

export { clientSettings }
