document.getElementById('eventnamecreation').addEventListener('click',function () {
    let inputValue = document.getElementById('Eventname').value;
    document.getElementById("Modal-title_event_name").innerHTML=(inputValue);
});