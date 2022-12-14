

btn_submit.addEventListener('click', function (event) {
    event.preventDefault();
    var elements = form.getElementsByTagName("input");
    for (i = 0; i < elements.length; i++) {
        validateFields(elements[i])
    }
});

btn_reset.addEventListener('click', function () {
    var elements = form.getElementsByTagName("input");
    for (i = 0; i < elements.length; i++) {
        var element = elements[i];
        removeMsgError(element.parentNode);
    }
});


function validateFields(element) {
    if (!element.value) {
        addMsgError(element.parentNode)
    } else {
        removeMsgError(element.parentNode)
    }
}

function addMsgError(element) {
    element.classList.add('error');
    var small = element.getElementsByTagName('small')[0];
    if (!small.textContent) {
        small.append("Este campo é obrigatório!");
    }
}

function removeMsgError(element) {
    element.classList.remove('error');
    element.getElementsByTagName('small')[0].textContent = "";
}