  // Disable form submissions if there are invalid fields
  (function() {
    'use strict';
    window.addEventListener('load', function() {

      var forms = document.getElementsByClassName('needs-validation');

      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  var entry=0;
  var input = document.getElementById("pwd1");
  var x = document.getElementById("uname");
  var y = document.getElementById("pwd");
  var z = document.getElementById("pwd2");

  function change()
  {
    if(entry==0)
    {
      document.getElementById("pwd1").placeholder="email@example/com";
       entry++;
       input.classList.add("red");
       x.classList.add("tra");
       y.classList.add("tran");
       z.classList.add("trans");
    }
  }

 
