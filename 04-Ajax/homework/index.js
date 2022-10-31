const rutaGet = "http://localhost:5000/amigos/";

function clearInputs() {
    $("#input").val("");
    $("#inputDelete").val("");
}

function showFriends(info) {
    $("#lista").empty();
    info.forEach(element => {
        $("#lista").append(`<li> ${element.name} </li>`);
    });
}

$("#boton").click(() => {
    $.get(rutaGet, (friends) => {
        friends.forEach(element => {
            $("#lista").append(`<li> ${element.name} </li>`);
        });
    });
});

$("#search").click(() => {
    let id = $("#input").val();

    clearInputs();

    if (id) {
        $.get(rutaGet + id, (friends) => {
            $("#amigo").text(friends.name);
        });
    } else {
        $("#error").text("Debes ingresar el id de un amigo")
    }
});

$("#delete").click(() => {
    let id = $("#inputDelete").val();

    clearInputs();

    if (id) {
        $.ajax({
            url: rutaGet + id,
            type: "DELETE",
            success: function(result) {
                showFriends(result);
                $("#success").text("Your friend has been deleted");
            },
        });
    } else {
        alert("WARNING!! your input a invalid ID")
    }
});