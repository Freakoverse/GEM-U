document.addEventListener('DOMContentLoaded', function() {
    // Function to close all popups
    function closeAllPopups() {
        const popups = document.querySelectorAll('[popupID]');
        popups.forEach(popup => {
            popup.classList.remove('flex');
            popup.classList.add('hidden');
        });
        document.body.classList.remove('overflow-hidden'); // Remove overflow-hidden class from body
    }

    // Function to open the popup
    function openPopup(popupID) {
        closeAllPopups(); // Close all other popups first
        const popup = document.querySelector(`[popupID="${popupID}"]`);
        if (popup) {
            popup.classList.remove('hidden');
            popup.classList.add('flex');
            document.body.classList.add('overflow-hidden'); // Add overflow-hidden class to body
        }
    }

    // Function to close the popup
    function closePopup(popupID) {
        const popup = document.querySelector(`[popupID="${popupID}"]`);
        if (popup) {
            popup.classList.remove('flex');
            popup.classList.add('hidden');
            document.body.classList.remove('overflow-hidden'); // Remove overflow-hidden class from body
        }
    }

    // Event listener for buttons with popupAction
    document.querySelectorAll('[popupAction]').forEach(button => {
        button.addEventListener('click', function() {
            const action = this.getAttribute('popupAction');
            const match = action.match(/(open|close)(.+)/); // Match open/close and the rest of the string

            if (match) {
                const actionType = match[1]; // 'open' or 'close'
                const popupBaseID = match[2]; // The part after 'open' or 'close'

                if (actionType === 'open') {
                    openPopup(popupBaseID);
                } else if (actionType === 'close') {
                    closePopup(popupBaseID);
                }
            }
        });
    });
});
