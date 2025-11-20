require 'mqtt'
require 'uri'
require 'dotenv/load'

# Create a hash with the connection parameters from the URL
conn_opts = {
  remote_host: ENV['HOSTNAME'] || 'localhost',
  remote_port: ENV['PORT'] || '1883',
  username: ENV['USERNAME'] || 'guest',
  password: ENV['PASSWORD'] || 'guest',
  ssl: ENV['SSL'] || false
}
topic = 'test'
puts "#{conn_opts}"
# Subscribe example
Thread.new do
  MQTT::Client.connect(conn_opts) do |c|
    # The block will be called when you messages arrive to the topic
    c.get(topic) do |t, message|
      puts "#{t}: #{message}"
    end
  end
end

# Publish example
MQTT::Client.connect(conn_opts) do |c|
  # publish a message to the topic 'test'
  loop do
    c.publish(topic, 'Hello World')
    sleep 1
  end
end