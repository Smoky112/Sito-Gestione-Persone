/*
appunti in caso mi dimenticassi:
tbody incapsula un insieme di righe di tabelle

1)Creo un array dove vado ad inserire tutte le persone
2)Prendo i valori di tutte le persone
3)Creo l'oggetto Persona
4)inserisco tramite .push la persona all'interno del mio array
5)aggiorno la tabella cosi' da visualizzarla ogni volta.

6)ForEach lo utilizzo per itinerare su ogni oggetto creato presente nel mio array, creo una riga da tabella tag tr e la inserisco nel tag td
*/

let persone = [];

function aggiungiPersona() {
    const nome = document.getElementById('nome').value;
    const cognome = document.getElementById('cognome').value;
    const email = document.getElementById('email').value;
    const dataNascita = document.getElementById('dataNascita').value;
    const telefono = document.getElementById('telefono').value;
    const paese = document.getElementById('paese').value;
    const provincia = document.getElementById('provincia').value;

    const persona = {
        nome,
        cognome,
        email,
        dataNascita,
        telefono,
        paese,
        provincia
    };
    
    persone.push(persona);

    aggiornaTabella();
    document.getElementById('formPersona').reset();
}


/* SPIEGAZIONE
uso document.querySelector('#tabellaPersone tbody'); per selezionare l'elemento (tbody è dove si inseriscono le tabelle)

tbody.innerHTML = ''; le svuoto

const row = document.createElement('tr'); = creo una riga tr

row.innerHTML... = ho cercato su internet il funzionamento, viene utilizzato un template per inserire i vari value, con in fine la creazione di un tasto rimuovi per rimuovere tutto.

tbody.appendChild(row); aggiungo alla 


*/

function aggiornaTabella() {
    const tbody = document.querySelector('#tabellaPersone tbody');
    tbody.innerHTML = ''; 

    persone.forEach((persona, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${persona.nome}</td>
            <td>${persona.cognome}</td>
            <td>${persona.email}</td>
            <td>${persona.dataNascita}</td>
            <td>${persona.telefono}</td>
            <td>${persona.paese}</td>
            <td>${persona.provincia}</td>
            <td><button class="togli" onclick="rimuoviPersona(${index})">Rimuovi</button></td>
        `;
        tbody.appendChild(row);
    });
}

function rimuoviPersona(index) {
    persone.splice(index, 1);
    aggiornaTabella(); 
}
