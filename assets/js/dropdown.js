const dropdownButtons = document.querySelectorAll('.dropdown-button');

        dropdownButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const menu = button.nextElementSibling;
                menu.classList.toggle('hidden');
                event.stopPropagation(); // Prevent the click event from bubbling up
            });
        });

        window.addEventListener('click', () => {
            const dropdowns = document.querySelectorAll('.dropdown-menu');
            dropdowns.forEach(dropdown => {
                dropdown.classList.add('hidden');
            });
        });
