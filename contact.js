let contacts = [];

function add(name, lastname, telefono, cuidad, direccion){
    contacts.push({
        "id": contacts.length +1,
        "name": name,
        "lastname": lastname,
        "phone": telefono,
        "location": {
            "cit": cuidad,
            "direction": direccion
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


