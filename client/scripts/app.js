var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10); // limits username to 10 characters long

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function (callback = () => {}) {
    
    Parse.readAll((data) => {
      //find the unique values of the room names
      var rooms = _.uniq(_.pluck(data.results, "roomname"));
      //add those rooms to the select
      _.each(rooms, (room) => Rooms.add(room));
      // pick default and render chats for that room
      // debugger;
      RoomsView.$select.val(rooms[1]);
      RoomsView.renderRoom(rooms[1], data.results);
      // examine the response from the server request:
      console.log(data);

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
