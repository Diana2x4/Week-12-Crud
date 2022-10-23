
var selectedRow = null

function onFormSubmit(){
var formData = readFormData();
if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }

// this allows to get values from the form using Ids, creates var formData that
//is used in onFormSubmit function
function readFormData(){
    var formData ={};
    formData["plantName"] = document.getElementById("plantName").value;
    formData["waterDay"] = document.getElementById("waterDay").value;
    formData["waterAmmount"] = document.getElementById("waterAmmount").value;
    formData["fed"] = document.getElementById("fed").value;
    return formData;

}


function insertNewRecord (data){
    //tbody is an html tag that is found under the table
    var table = document.getElementById("plantList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    //variable for each element in form
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.plantName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.waterDay;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.waterAmmount;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.fed;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                        <a onClick="onDelete(this)">Delete</a>`;
}

function onEdit(td) {
    
        selectedRow = td.parentElement.parentElement;
        document.getElementById("plantName").value = selectedRow.cells[0].innerHTML;
        document.getElementById("waterDay").value = selectedRow.cells[1].innerHTML;
        document.getElementById("waterAmmount").value = selectedRow.cells[2].innerHTML;
        document.getElementById("fed").value = selectedRow.cells[3].innerHTML;
    }
    
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.plantName;
    selectedRow.cells[1].innerHTML = formData.waterDay;
    selectedRow.cells[2].innerHTML = formData.waterAmmount;
    selectedRow.cells[3].innerHTML = formData.fed;
}

function onDelete(td) {
        row = td.parentElement.parentElement;
        document.getElementById("plantList").deleteRow(row.rowIndex);
        resetForm();
    }

//resets form for user 
function resetForm() {
    document.getElementById("plantName").value = "";
    document.getElementById("waterDay").value = "";
    document.getElementById("waterAmmount").value = "";
    document.getElementById("fed").value = "";
}