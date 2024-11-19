let discosRock = [
    {
        url:"rock-alta-suciedad-calamaro.jpg",
        artista:"Andres Calamaro",
        disco:"Alta suciedad",
        canciones:[
            {
                nombre:"Alta suciedad",
                tiempo:"4:26"
            },
            {
                nombre:"Todo lo demás también",
                tiempo:"2:48"
            },
            {
                nombre:"Donde manda marinero",
                tiempo:"4:03"
            },
            {
                nombre:"loco",
                tiempo:"3:43"
            },
            {
                nombre:"Flaca",
                tiempo:"4:37"
            },
            {
                nombre:"¿Quién asó la manteca?",
                tiempo:"4:27"
            },
            {
                nombre:"Media Verónica",
                tiempo:"3:36"
            },
            {
                nombre:"El tercio de los sueños",
                tiempo:"3:55"
            },
            {
                nombre:"Comida china",
                tiempo:"2:10"
            },
            {
                nombre:"Elvis está vivo",
                tiempo:"3:01"
            },
            {
                nombre:"Me arde",
                tiempo:"3:37"
            },
            {
                nombre:"Crímenes perfectos",
                tiempo:"4:23"
            },
            {
                nombre:"Nunca es igual",
                tiempo:"7:47"
            },
            {
                nombre:"El novio del olvido",
                tiempo:"2:25"
            }
            
        ]
    },
    {
        url:"rock-bicicleta-seru-giran.jpg",
        artista:"Seru giran",
        disco:"Bicicleta"
    },
    {
        url:'rock-bohemio-calamaro.jpg',
        artista:"Andres Calamaro",
        disco:"Bohemio"
    },
    {
        url:'rock-clicks-modernos-charly.jpg',
        artista:"Charly Garcia",
        disco:"Clicks modernos"
    },
    {
        url:'rock-desatormentandonos-pescado-rabioso.jpg',
        artista:"Pescado rabioso",
        disco:"desatormentandonos"
    },
    {
        url:'rock-oktubre-patricio-rey.jpg',
        artista:"Patricio Rey",
        disco:"oktubre"
    },
    {
        url:'rock-peperina-seru-giran.jpg',
        artista:"Seru giran",
        disco:"Peperina"
    },
    {
        url:'rock-signos-soda-stereo.jpg',
        artista:"Soda stereo",
        disco:"Signos"
    },
    {
        url:'rock-verde-paisaje-del-infierno-los-piojos.jpg',
        artista:"Los piojos",
        disco:"Verde paisaje del infierno"
    }   
]

const contenedordiscosRock = document.querySelector('#discos-rock')

for (indice in discosRock){
    contenedordiscosRock.innerHTML += `
                <div class="card">
                    <img src="img/${discosRock[indice].url}" alt="portada de ${discosRock[indice].disco}">
                    <div class="card-info">
                        <h5>${discosRock[indice].disco}</h5>
                        <p>${discosRock[indice].artista}</p>
                    </div>
                </div>    
    `
}


const cards = document.querySelectorAll('.card')


cards.forEach(card => {
    card.addEventListener('click', () =>{

        card.classList.toggle('card')
        card.classList.toggle('card-abierta')
    })
})
