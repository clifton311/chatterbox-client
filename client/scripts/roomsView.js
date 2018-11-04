var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {

  },

  renderRoom: function (roomname) {
    var template = _.template(`<option value="<%= roomname %>"><%= roomname %></option>`);
    $('#rooms select').append(template({roomname: roomname}));
  }

};
