const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})


app.get('/bacheca', (req, res) => {

    const posts = [
        {
            title: "Viaggio in Colombia",
            content: "Un racconto fotografico del mio viaggio attraverso la Colombia, esplorando le sue città e paesaggi unici.",
            image: "colombia-trip.jpg",
            tags: ["viaggi", "fotografia", "Colombia", "avventura"]
        },
        {
            title: "Minimalismo nel Web Design",
            content: "L'importanza del design minimalista per migliorare l'esperienza utente e la leggibilità dei contenuti.",
            image: "minimal-webdesign.jpg",
            tags: ["web design", "UX", "minimalismo"]
        },
        {
            title: "Fotogiornalismo: Etica e Responsabilità",
            content: "Una riflessione sull'etica del fotogiornalismo e sull'importanza di raccontare storie in modo autentico.",
            image: "photojournalism-ethics.jpg",
            tags: ["fotogiornalismo", "etica", "documentario"]
        },
        {
            title: "Introduzione a JavaScript per Creativi",
            content: "Come JavaScript può essere usato per creare progetti interattivi nel campo delle arti visive e digitali.",
            image: "js-for-creatives.jpg",
            tags: ["JavaScript", "coding", "arte", "creatività"]
        },
        {
            title: "Il Potere del Bianco e Nero nella Fotografia",
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