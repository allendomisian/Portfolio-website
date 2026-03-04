// js/script.js

    if (contactForm)
        contactForm.addEventListener('submit'), function(event) {
            event.preventDefault();

            formMessage.textContent = '';
            formMessage.classList.remove('success', 'error');

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '') {
                formMessage.textContent = 'Name is required.';
                formMessage.classList.add('error');
                return;
            }

            if (email === '') {
                formMessage.textContent = 'Email is required.';
                formMessage.classList.add('error');
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                formMessage.textContent = 'Please enter a valid email address.';
                formMessage.classList.add('error');
                return;
            }

            if (message === '') {
                formMessage.textContent = 'Message is required.';
                formMessage.classList.add('error');
                return;
            }
            {   }
            formMessage.textContent = 'Your message has been sent! (This is a demo, no actual submission.)';
            formMessage.classList.add('success');
            contactForm.reset();
        }