let contacts = [];

function add(name, lastname, phone, city, direction){
    contacts.push({
        "id": contacts.length +1,
        "name": name,
        "lastname": lastname,
        "phone": phone,
        "location": {
            "cit": city,
            "direction": direction
        }
    });
}


function deleteContact(name){
    let current = [];
    for(let i = 0; i < contacts.length; i++){
        if(contacts[i].name !== name){
            current.push(contacts[i]);
        }
    }
    contacts = current;
}

let search = function(name){
    let object = null;
    for(let i = 0; i < contacts.length; i++){
        if(contacts[i].name === name){
            object = contacts[i];
        }
    }
    return object;
}

function updateContact(name, lastname, cell){
    let object = search(name);
    if(object != null){
        object.lastname = lastname;
        object.phone = cell;
    }
}




function toString(){
    let string = "";
    for(let i = 0; i < contacts.length; i++){
        string += contacts[i];
    }
    return string;
}


add("Hernan", "Alvarado", 123, "Tasco", "Calle 6 #5-48");
add("David", "Parra", 456, "Bogota", "Carrera 7b #138-68");

contacts.forEach(x => console.log(x));
console.log("Se ha modificado un contacto dentro de nuestra agenda");

updateContact("Hernan", "Alvarado Parra", 3138075404);
contacts.forEach(x => console.log(x));

