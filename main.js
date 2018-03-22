function updateTime() {
    var currentDate = new Date();
    var hour = currentDate.getHours();
    var minute = currentDate.getMinutes();
    var second = currentDate.getSeconds();

    var time = hour.toString().padStart(2, "0") + ":" 
        + minute.toString().padStart(2, "0") + ":" 
        + second.toString().padStart(2, "0");

    $("#current_time").text(time);
}

$(document).ready(function() {
    updateTime();
    setInterval(updateTime, 1000);
});
