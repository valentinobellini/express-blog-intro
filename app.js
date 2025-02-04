const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})


// definiamo l'uso di una cartella per i file statici
app.use(express.static('public'));


app.get('/bacheca', (req, res) => {

    const posts = [
        {
            title: "BIT ROT PROJECT 1",
            content: "Un racconto fotografico del mio viaggio attraverso la Colombia, esplorando le sue città e paesaggi unici.",
            image: "colombia-trip.jpg",
            tags: ["viaggi", "fotografia", "Colombia", "avventura"]
        },
        {
            title: "BIT ROT PROJECT 2",
            content: "L'importanza del design minimalista per migliorare l'esperienza utente e la leggibilità dei contenuti.",
            image: "minimal-webdesign.jpg",
            tags: ["web design", "UX", "minimalismo"]
        },
        {
            title: "BIT ROT PROJECT 3",
            content: "Una riflessione sull'etica del fotogiornalismo e sull'importanza di raccontare storie in modo autentico.",
            image: "photojournalism-ethics.jpg",
            tags: ["fotogiornalismo", "etica", "documentario"]
        },
        {
            title: "BIT ROT PROJECT 4",
            content: "Come JavaScript può essere usato per creare progetti interattivi nel campo delle arti visive e digitali.",
            image: "js-for-creatives.jpg",
            tags: ["JavaScript", "coding", "arte", "creatività"]
        },
        {
            title: "BIT ROT PROJECT 5",
            content: "Perché le immagini in bianco e nero hanno ancora un forte impatto emotivo e narrativo.",
            image: "blackwhite-photography.jpg",
            tags: ["fotografia", "bianco e nero", "narrazione"]
        }
    ];

    res.json(posts);

})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})