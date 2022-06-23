let state = {
    list: [
        {
            name: "Ana Popescu",
            phoneNumber: "0723223126"
        }
    ],
    idxEdit: null,
}

function draw(){
    let tableBody = document.querySelector("#agenda tbody")
    let tableHead = document.querySelector("#agenda thead")
    let str = "";
    str2 = `
        <tr>
            <th> Nume </th>
            <th> Telefon </th>
        </tr>
        `;
    for(let i = 1; i < state.list.length; i++){
        let elem = state.list[i];
            str +=` 
                <tr>
                    <td>  ${elem.name} </td>
                    <td> ${elem.phoneNumber} </td>
                    <td><button onclick="del(${i})">Delete</button></td>
                    <td><button onclick="edit(${i})">Edit</button></td>
                </tr>  
            `
    }   
    tableBody.innerHTML = str;
    tableHead.innerHTML = str2;
}

function add(event){
    event.preventDefault();
    let name = document.querySelector('[name="name"]').value.trim();
    let phoneNumber = document.querySelector('[name="phoneNumber"]').value.trim();

    if(name.length === 0 && phoneNumber.length === 0) {
        warningNamePhone.classList.remove("hidden");
        return;
    }
    warningNamePhone.classList.add("hidden");

    if (name.length === 0 || name === isNaN) {
        warningName.classList.remove("hidden");
        return;
    }
    warningName.classList.add("hidden");

    if (phoneNumber.length !== 10){
        warning.classList.remove("hidden");
        return;
    }    
    warning.classList.add("hidden");

    if(state.idxEdit === null){ 
        // add a new contact in the list
        state.list.push({
            name: name,
            phoneNumber: phoneNumber,
        })
    }
    else { 
        // edit a contact from the list
        state.list[state.idxEdit] = {
            name: name,
            phoneNumber: phoneNumber,
        };
    state.idxEdit = null;
    }
draw();
document.querySelector("form").reset();
}

function del(idx) {
    if (
        confirm(`Esti sigur ca vrei sa stergi contactul: ${state.list[idx].name}?`)
    )
        state.list.splice(idx, 1);
        draw();
}

function edit(idx) {
    let elem = state.list[idx];
    document.querySelector("[name = 'name']").value = elem.name;
    document.querySelector("[name = 'phoneNumber']").value = elem.phoneNumber;
    state.idxEdit = idx;
}