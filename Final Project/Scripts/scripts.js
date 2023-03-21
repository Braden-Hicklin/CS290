// JQuery function to hide and show name input box
$(function () {
    $('input[name="has_name"]').on('click', function () {
        if ($(this).val() == 'yes') {
            $('input[name="name"]').show();
            $('label[for="name"]').show();
            $('span[id="name"]').show();
        }
        else {
            $('input[name="name"]').hide();
            $('label[for="name"]').hide();
            $('span[id="name"]').hide();
            
        }
    });
});

// Saves the user from redirect
window.addEventListener("load", function () {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
            method: 'POST',
            body: data,
        })
            .then(() => {
                alert("Success!");
            })
    });
});