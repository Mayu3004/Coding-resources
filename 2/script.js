let arr =[]
let arrUser = {}

function saveData(){
    const name = document.getElementById('name').value;
    // console.log(name)
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;
    arrUser = {
        name,
        age,
        address,
        contact
    }
    arr.push(arrUser);
    console.log(arr)
    displayData(arr);
}

function displayData(arr){

    let tableRow = document.getElementById('table-body');
    tableRow.innerHTML =``;
    for(let i = 0;i<arr.length;i++){
    tableRow.innerHTML += `<tr><td>${arr[i].name}</td>
                            <td>${arr[i].age}</td>
                            <td>${arr[i].contact}</td>
                            <td><button class='update-btn' onclick='updateData()'>Edit</button><button class= 'delete-btn'onclick="deleteData(${i})">Delete</button></td></tr>`

    }
}

function deleteData(row){
    console.log(row)
    arr.splice(row,1);
    displayData(arr)
}

function updateData(){
    let updateForm = document.querySelector('.display');
    updateForm.innerHTML = `<form method="dialog" class="form">
    <label for="name">Name:</label>
    <input type="text" id="name">
    <label for="age">Age:</label>
    <input type="number" max="100" min="1" id="age">
    <label for="address">Address:</label>
    <input type="text" id="address">
    <label for="contact">Contact:</label>
    <input type="number" id="contact">
    <button onclick="saveData()" type="submit">Save</button>
</form>`
}
