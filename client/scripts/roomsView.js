var RoomsView = {
  
  $button: $('#rooms button'),
  $select: $('#rooms select'),
  
  initialize: function () {
    // call renderRoom on each room
    // filter to welcome chat messages
  },
  
  renderRoom: function (roomname) {
    var template = _.template(`<option value="<%= roomname %>"><%= roomname %></option>`);
    $('#rooms select').append(template({roomname: roomname}));
    // append to room list
  }
  
};

// if select changes
  // currentRoom = $('#rooms select :selected').text()
  // filter messages from room view