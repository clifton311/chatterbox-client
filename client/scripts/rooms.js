var Rooms = {
  // how to return current room name
  // display only messages with roomname = to current room
  add: function(roomname) {
    RoomsView.renderRoom(roomname);
  }

};

// where should this live?
$('#rooms button').click(function() {
  var roomname = prompt('Enter roomname');
  Rooms.add(roomname);
});
  