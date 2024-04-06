// This is a simple Node.js code for testing purposes

// Function to add two numbers
function addNumbers(a, b) {
  return a + b;
}

// Testing the addNumbers function
console.log(addNumbers(5, 10)); // Output: 15

// Function to multiply two numbers
function multiplyNumbers(a, b) {
  return a * b;
}

// Testing the multiplyNumbers function
console.log(multiplyNumbers(3, 7)); // Output: 21


  // JavaScript and jQuery code goes here
  $(document).ready(function() {
    // Example: Smooth scrolling for anchor links
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Example: Form validation
    $("form").submit(function(event) {
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();

        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields");
            event.preventDefault();
        }
    });

    // Example: Image gallery using Magnific Popup
    $('.project-container').magnificPopup({
        delegate: 'img',
        type: 'image',
        gallery:{
            enabled:true
        }
    });
});