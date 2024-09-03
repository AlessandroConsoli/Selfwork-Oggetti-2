// let name;
// let number;

let rubrica = {
    'contacts' : [
        {
            'nome': 'Nicola', 
            'telefono': '3331111111', 
        },
        {'nome': 'Lorenzo', 'telefono': '3332222222'},
        {'nome': 'Paola', 'telefono': '3333333333'},
        {'nome': 'Jenny', 'telefono': '3334444444'},        
    ],
    'show_contact' : function (name) {
        // console.log(`Nome: ${rubrica.contacts[i].nome} \nTelefono: ${rubrica.contacts[i].telefono}`)
        let contatto = rubrica.contacts.find ( (contatto)=> contatto.nome == name);
        if (contatto) {
            console.log(`La ricerca ha prodotto un risultato: \nNome: ${contatto.nome} \nTelefono: ${contatto.telefono}`);            
        }else{
            console.log(`Contatto non trovato!`);            
        }        
    },
    'showAllContacts' : function (){
        rubrica.contacts.forEach((contatto) => console.log(`Nome: ${contatto.nome} \nTelefono: ${contatto.telefono}`));
        
    },
    'addContact' : function (name, phone) {
        rubrica.contacts.push({nome : name , telefono : phone});
        console.log(`Contatto aggiunto: ${name}`);
        
    },
    'removeContact' : function (name_to_remove) {
        let nameToRemove = rubrica.contacts.find ( (nameToRemove)=> nameToRemove.nome == name_to_remove);
        let index = this.contacts.indexOf(nameToRemove); 
        this.contacts.splice(index);  
        console.log(`Contatto rimosso: ${name_to_remove}`);        
    },
}
rubrica.showAllContacts();
rubrica.show_contact('Paola');
rubrica.removeContact('Jenny');
rubrica.addContact('Vercingetorige', 1234567890);
rubrica.showAllContacts();

