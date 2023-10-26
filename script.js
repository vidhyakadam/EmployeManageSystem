const tbody = document.querySelector("tbody");
const form = document.querySelector("form");



// Function to add an employee to the table
function addEmployee(employee) {
    const tr = document.createElement("tr");
    for (let key in employee) {
        const td = document.createElement("td");
        td.innerText = employee[key];
        tr.appendChild(td);
    }

    // Create a delete button for the row
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");

    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", deleteRecord);

    const options = document.createElement("td");
    options.appendChild(deleteButton);

    // Create an edit button for the row
    const editButton = document.createElement("button");
    editButton.classList.add("delete");

    editButton.innerText = "Update";
    editButton.addEventListener("click", editRecord);

    options.appendChild(editButton);
    tr.appendChild(options);
    tbody.appendChild(tr);
}

// Function to delete a record
function deleteRecord(event) {
    const buttonRef = event.target;
    const row = buttonRef.parentNode.parentNode;
    row.remove();
}

// Function to edit a record
function editRecord(event) {
    const buttonRef = event.target;
    const row = buttonRef.parentNode.parentNode;
    const cells = row.querySelectorAll("td");

    // Get the values from the cells
    const name = cells[0].innerText;
    const companyName = cells[1].innerText;
    const gender = cells[2].innerText;
    const position = cells[3].innerText;
    const salary = cells[4].innerText;
    const email = cells[5].innerText;

    // Populate the form with the values
    form.name.value = name;
    form.companyName.value = companyName;
    form.gender.value = gender;
    form.position.value = position;
    form.salary.value = salary;
    form.email.value = email;

    // Remove the row from the table
    row.remove();
}

// Function to handle form submission
function onSubmitForm(event) {
    event.preventDefault(); // Prevent submission and page reload

    let employeeData = {
        name: form.name.value,
        companyName: form.companyName.value,
        gender: form.gender.value,
        position: form.position.value,
        salary: form.salary.value,
        email: form.email.value
    };


    addEmployee(employeeData); // Add the employee data to the table

    form.reset();
}

form.addEventListener("submit", onSubmitForm);

