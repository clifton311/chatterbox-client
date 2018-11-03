var FormView = {

  $form: $('form'), 

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit); // when submit button is clicked, invoke handlesubmit method
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault(); //The event.preventDefault() method stops the default action of an element from happening.


    
    console.log('click!');
  },

  
  setStatus: function(active) {
    var status = active ? 'true' : null;
    //toggle attr from disabled
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};