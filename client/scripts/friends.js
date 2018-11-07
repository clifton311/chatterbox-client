// var Friends = {
//   //create a friends array
//   friendList: [],

//   initialize: function() {
//     // no access to username of selected element
//     // $(document).on('click', '.username', () => Friends.toggleStatus()); //refine selector
//   },
//   // Friends.toggleStatus
//   toggleStatus: function () {
//     // purpose: when a specific user name is clicked, change them to being friends
//     // on username click, add .friend class to the clicked element

//     //when a user is clicked, style all their messages differently 
//     // var username; // the selected thing
//     // //store usernames in an array when highlighted
    
//     // var found = false;
//     // // for friend in friendList
//     // for (var i = 0; i < Friends.friendList.length; i++) {
//     //   // if username === friend
//     //   var friend = Friends.friendlist[i];
//     //   if (username === friend) {
//     //     // remove friend
//     //     Friends.friendList.splice(i, 1);
//     //     // set toggle to false
//     //     found = true;
//     //   }
//     // }
//     // if (!found) {
//     //   Friends.friendList.push(username);
//     // }

//     //call the renderfriends function
//     // Friends.renderFriends();
//     $('.username').addClass('friend'); // need to refine
//   },

// renderFriends: function() {
//   //for each message in the chat
//     //if username is in friend list
//     //add friend class to message

// }

// };

// $(document).on('click', '.username', () => Friends.toggleStatus);

var Friends = {

  friendList: [],
  
  initialize: function () {
    $('#chats').on('click', '.username', Friends.toggleStatus);
  },
  // Friends.toggleStatus
  toggleStatus: function () {

    // var username;

    // var found = false;
    // // for friend in friendList
    // for (var i = 0; i < Friends.friendList.length; i++) {
    //   // if username === friend
    //   var friend = Friends.friendlist[i];
    //   if (username === friend) {
    //     // remove friend
    //     Friends.friendList.splice(i, 1);
    //     // set toggle to false
    //     found = true;
    //   }
    // }
    // if (!found) {
    //   Friends.friendList.push(username);
    // }

    Friends.renderFriends();
  },

  renderFriends: function () {
    $('.username').addClass('friend');
    // console.log(this);
  }

};
