var Friends = {
  toggleStatus :function () {
  // purpose: when a specific user name is clicked, change them to being friends
  // on username click, add .friend class to the clicked element
  $('.username').addClass('.friend');

  }

};

$(document).on('click', '.username', function() {
  // where should this live, what should it do 
  // toggleStatus doesn't seem to add class
  console.log('hi');
  Friends.toggleStatus();
}); 