important = true;

function toggleImportant() {
  console.log("clicked");

  if(important){
    $("#iImportant").removeClass("fas").addClass("far");
    important = false;
  }else{
    $("#iImportant").removeClass("fas").addClass("far");
    important = true;
  }
  
}

function save(){
    console.log("saving task");
    let title = $("#txtTitle").val();
    let date = $("#selDate").val();
    let location = $("#txtLocation").val();
    let priority = $("#selPriority").val();
    let color = $("#selColor").val();
    let contact = $("#txtContact").val();
    let desc = $("#txtDescrition").val();


let task = new Task(title, important, date, location, prioirity, color, contact, desc);
$.ajax({
type:"POST",
url:serverUrl + "api/tasks/",
data: JSON.stringify(task),
contentType: "application/json",
success: function (res) {
    console.log("Server says", res);

    let t = JSON.parse(res);
    displayTask(t);
},
error: function (error){
    console.error("Error saving task", error);
},
});
}
function displayTask(task){
    let syntax = `<div class="task">
    <h6>${task.title}</h6>
    <label>${task.location}</label>
    <label>${task.contact}</label>
   </div> ;`

   $(".pending-tasks").append(syntax);
}
function init() {
  console.log("calender system");

  $("#iImportant").click(toggleImportant);
  $("#btnSave").click(save);
}

window.onload = init;
