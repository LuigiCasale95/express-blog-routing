/* Esercizio,
Creare un file di routing (routers/posts.js) che conterrà le rotte necessario per l'entità post.

All'interno creare le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)

Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, secondo le convenzioni REST.

Ad esempio: 

Se viene chiamata /posts col verbo GET ci aspettiamo “Lista dei post”;

Se viene chiamato /posts/1 col verbo DELETE ci aspettiamo “Cancellazione del post 1”

e via dicendo…

Registrare il router dentro app.js con il prefisso posts/.

Nota:

Avete anche l’array dei post che vi abbiamo fornito, salvatelo da qualche parte.
Ci servirà per i prossimi step.
Per oggi vi può servire in caso vogliate provare i bonus.
 */

/* import del framework express */
const express = require("express");
/* Creazione instanza di express */
const app = express();
/* Impostiamo un ref per il numero della porta*/
const port = 3000;

/*usiamo il middleware static di express (per remdere disponibile il file statico ovvero le img in questo caso)*/
app.use(express.static("public"));

/* Impostazione della rotta di index */
app.get("/", (req, res) => {
    res.send('<h1>Server del mio blog</h1>')
})

/* rotte di  CRUD sulla risorsa posts*/
// index
app.get('/pizzas', function (req, res) {
res.send('Lista delle pizze');
});
// show
app.get('/pizzas/:id', function (req, res) {
res.send('Dettagli della pizza ' + req.params.id);
});
// store
app.post('/pizzas', function (req, res) {
res.send('Creazione nuova pizza');
});
// update
app.put('/pizzas/:id', function (req, res) {
res.send('Modifica integrale della pizza ' + req.params.id);
});
// modify
app.patch('/pizzas/:id', function (req, res) {
res.send('Modifica parziale della pizza ' + req.params.id);
});
// destroy
app.delete('/pizzas/:id', function (req, res) {
res.send('Eliminazione della pizza ' + req.params.id);
});

/* creazione di una seconda rotta  */
app.get("/bacheca", (req, res) => {
    const contenuti = [
        {
            titolo: "prova",
            contenuto: "prova contenuto",
            image: "public\imgs\ciambellone.jpeg",
            tags: ["prova 1", "prova 2", "prova 3"]
        },
        {
            titolo: "prova",
            contenuto: "prova contenuto",
            image: "public\img\imgs\cracker_barbabietola.jpeg",
            tags: ["prova 1", "prova 2", "prova 3"]
        },
        {
            titolo: "prova",
            contenuto: "prova contenuto",
            image: "public\imgs\pane_fritto_dolce.jpeg",
            tags: ["prova 1", "prova 2", "prova 3"]
        },
        {
            titolo: "prova",
            contenuto: "prova contenuto",
            image: "public\imgs\pasta_barbabietola.jpeg",
            tags: ["prova 1", "prova 2", "prova 3"]
        },
        {
            titolo: "prova",
            contenuto: "prova contenuto",
            image: "public\imgs\torta_paesana.jpeg",
            tags: ["prova 1", "prova 2", "prova 3"]
        }
    ];
    res.json(contenuti)
})

/* mettiamo in ascolto il server sulla porta definitiva */
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});