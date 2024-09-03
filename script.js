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
        let contatto = rubrica.contacts.find ( (contatto)=> contatto.nome == name)
        if (contatto) {
            console.log(`Nome: ${contatto.nome} \nTelefono: ${contatto.telefono}`);            
        }else{
            console.log(`Contatto non trovato!`);            
        }        
    },
    'showAllContacts' : function (){
        rubrica.contacts.forEach((contatto) => console.log(`Nome: ${contatto.nome} \nTelefono: ${contatto.telefono}`));
        
    },
    'addContact' : function (name, phone) {
        rubrica.contacts.push({nome : name , telefono : phone});
    },
    //  SBAGLIO QUI
    'removeContact' : function (nome_da_rimuovere) {
        let index = rubrica.contacts.indexOf(nome_da_rimuovere);   
        console.log(index);
        
    },
}

rubrica.addContact('Vercingetorige', 1234567890);
rubrica.removeContact('Nicola');
rubrica.show_contact('Paola');
rubrica.showAllContacts();

