import consumer from "channels/consumer"

document.addEventListener('turbo:load', () => {

  const element = document.getElementById('room-id')
  const room_id = element.getAttribute('data-room-id')

  console.log(room_id)

  consumer.subscriptions.create({channel: "RoomChannel",
  room_id: room_id}, {
    connected() {
      console.log("Connected to room channel " + room_id)
      // Called when the subscription is ready for use on the server
    },
  
    disconnected() {
      // Called when the subscription has been terminated by the server
    },
  
    received(data) {
      // Called when there's incoming data on the websocket for this channel
     console.log(data)
    }
  });
  
})
