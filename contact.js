let contacts = [];

function add(name, lastname){
    contacts.push({
        "name": name,
        "lastname": lastname
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



add("Hernan", "123");
add("David", "132");



