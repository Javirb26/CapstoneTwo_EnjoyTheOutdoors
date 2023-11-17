window.onload = function () {
        const formEl = document.getElementById("form-submit");
        const emailInputEl = document.getElementById("email");
        const toastTrigger = document.getElementById("liveToastBtn");
        const toastLiveExample = document.getElementById("liveToast");

        // Initialize the toast

        // Prevent form submission and reset email input
        formEl.addEventListener("submit", function (event) {
          event.preventDefault();
          // Your form submission logic here (e.g., sending data to a server)
          if (emailInputEl.value) {
            if (toastTrigger) {
              const toastBootstrap = new bootstrap.Toast(toastLiveExample);

              toastBootstrap.show();

              emailInputEl.value = ""; // Reset the email input field
            }
          }
        });
      };