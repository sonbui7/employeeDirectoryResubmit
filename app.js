const disView = function () {
    $('#displayDiv').empty()
    for (i = 0; i < employeeList.length; i++) {
        $(`#displayDiv`).append(`<div class = "employeeBox">
    <p>${employeeList[i].name}</p>
    <p>${employeeList[i].officeNum}</p>
    <p>${employeeList[i].phoneNum}</p>
    </div>`)
    }
};

const disVerify = function () {
    $('#displayDiv').empty();
    $('#displayDiv').append(`<input id = "verifyInput" class ="form-control" type="text">`);
    $('#displayDiv').append(`<p><button id = "submitVerify" class="btn btn-success">Submit</button></p>`);
    $('#displayDiv').append(`<div id = "verifyBox"></div>`);
    document.getElementById('submitVerify').addEventListener("click", nameVerify)
}

const nameVerify = function (event) {
    event.preventDefault();
    let nameCheck = $('#verifyInput').val();
    for (i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name === nameCheck) {
            $('#verifyBox').text("yes")
            return;

        }
        else ($("#verifyBox").text("no"))
    }
}

const disAdd = function () {
    $('#displayDiv').empty()
    $('#displayDiv').append('<input id = "firstName" type="text" class ="form-control" placeholder="Employee Name" >');
    $('#displayDiv').append('<input id = "roomNum" type="text" class ="form-control" placeholder="Office Number">');
    $('#displayDiv').append('<input id = "teleNum" type="text" class ="form-control" placeholder="Phone Number">');
    $('#displayDiv').append(`<p><button id = "submitAdd" class ="btn btn-success clearfix">Submit</button></p>`);
    for (i = 0; i < employeeList.length; i++) {
        $(`#displayDiv`).append(`<div class = "employeeBox">
    <p>${employeeList[i].name}</p>
    <p>${employeeList[i].officeNum}</p>
    <p>${employeeList[i].phoneNum}</p>
    </div>`)
    };
    document.getElementById('submitAdd').addEventListener("click", employeeAdd);
}

const employeeAdd = function (event) {
    event.preventDefault();
    let newEmployee = {};
    newEmployee.name = $("#firstName").val();
    newEmployee.officeNum = $("#roomNum").val();
    newEmployee.phoneNum = $("#teleNum").val();

    $('#displayDiv').append(`<div class="employeeBox"><p>${newEmployee.name}</p><p>${newEmployee.officeNum}</p><p>${newEmployee.phoneNum}</p></div>`);
    $("#firstName").val("");
    $("#roomNum").val("");
    $("#teleNum").val("");
    document.getElementById('submitAdd').addEventListener("click", employeeAdd);
};


$('#sideAdd').on("click", disAdd);
$('#sideView').on("click", disView);
$('#sideVerify').on("click", disVerify);