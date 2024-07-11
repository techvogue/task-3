document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('nameInput');
    const buttons = document.querySelectorAll('button');
    const nameInput = document.getElementById('nameInput');
    const errorMessage = document.getElementById('errorMessage');

    inputField.addEventListener('focus', function() {
        this.classList.add('focus');
    });

    inputField.addEventListener('blur', function() {
        this.classList.remove('focus', 'typing');
    });

    inputField.addEventListener('input', function() {
        if (this.classList.contains('focus')) {
            this.classList.add('typing');
        }
    });
  
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (!this.classList.contains('loading')) {
                this.classList.remove('Default', 'focused', 'pressed', 'disabled');
                this.classList.add('hovered');
            }
        });

        // button.addEventListener('mouseleave', function() {
        //     this.classList.remove('hover');
        //     this.classList.add('Default');
        // });

        button.addEventListener('focus', function() {
            if (!this.classList.contains('loading')) {
                this.classList.remove('Default', 'hover', 'pressed', 'disabled');
                this.classList.add('focused');
            }
        });

        button.addEventListener('mousedown', function() {
            if (!this.classList.contains('loading')) {
                this.classList.remove('Default', 'hover', 'focused', 'disabled');
                this.classList.add('pressed');
            }
        });

        button.addEventListener('mouseup', function() {
            this.classList.remove('pressed');
        });

        button.addEventListener('click', function(event) {
            if (nameInput.value.trim() === "") {
                event.preventDefault(); // Prevent the default button action
                errorMessage.style.display = 'block'; // Show the error message
                nameInput.classList.add('error-input'); // Add error styling to the input
            } else {
                errorMessage.style.display = 'none'; // Hide the error message
                nameInput.classList.remove('error-input'); // Remove error styling from the input

                const clickedButton = this; // Reference to the clicked button
                clickedButton.classList.remove('Default', 'hover', 'focused', 'pressed');
                clickedButton.classList.remove('Default');
                clickedButton.classList.add('loading', 'icon');
                clickedButton.disabled = true;
                submitButton.textContent = 'Submitting';
                nameInput.classList.add('disabled');
                nameInput.disabled = true; // Disable the input field
                setTimeout(() => {
                    clickedButton.classList.remove('Default');
                    clickedButton.classList.remove('icon', 'loading');
                    clickedButton.classList.add('disabled');
                    clickedButton.classList.remove('Default');
                    // clickedButton.disabled = false;
                    submitButton.textContent = 'Submitted'; // Change button text to "Submitted"
                     
                    // Clear the input field after form is successfully submitted
                    nameInput.placeholder = inputValue;
                    nameInput.value = '';
            
                }, 2000);
            }
        });
    });
});
