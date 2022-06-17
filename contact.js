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
        },
        "order": random(),
    });
}

function random(){
    return Number.parseInt(Math.random() *10000 +1);
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

function sort(){
    for(let i = 0; i < contacts.length -1; i++){
        let index_min = i;
        for(let j = i+1; j < contacts.length; j++)
            if(contacts[j].order < contacts[index_min].order)
                index_min = j;
        const value = contacts[index_min];
        contacts[index_min] = contacts[i];
        contacts[i] = value;
    }
    return contacts;
}


add("Hernan", "Alvarado", 123, "Tasco", "Calle 6 #5-48");
add("David", "Parra", 456, "Bogota", "Carrera 7b #138-68");
add("Juan", "...", 282, "Bogota", "Calle 80");
add("Camilo", "...", 792, "Bogota", "Calle 140");
console.log(sort());

