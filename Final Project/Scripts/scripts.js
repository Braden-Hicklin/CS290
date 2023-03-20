$(function () {
    $('input[name="has_name"]').on('click', function () {
        if ($(this).val() == 'yes') {
            $('#textboxes').show();
        }
        else {
            $('#textboxes').hide();            
        }
    });
});

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