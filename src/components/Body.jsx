import Consejo from './Consejo'

const info=[
    {
        subtitulo:"1. Aprende a utilizar la cámara que ya tienes",
        cont:"Hoy en día existen diferentes tipos de cámaras que poseen diferentes características que proporcionan una mejor toma y una mejor calidad. Pero al introducirte en el mundo de la fotografía el mejor consejo posible es aprender a utilizar la cámara que posees ya sea una cámara del celular o una profesional. “Lo que importa es la habilidad que posees, la cámara solo es una herramienta”. Aprende las características que tenga tu cámara, una vez conocido esto aprender como configurar la cámara dependiendo el momento. Por ejemplo: adecuar el zoom, brillo, enfoque, etc.",
        img:"/imagenes/consejo1.png",
    },
    {
        subtitulo:"2. Mantenlo simple.",
        cont:"Lo que hace que una foto sea única es su simplicidad, lo más difícil en el mundo de la fotografía es mantener la foto simple. Para usted que está empezando a conocer el mundo de la fotografía procure hacer tomas simples, el saber adecuar su herramienta y saber cuándo capturar, hará que mejore sus habilidades, además obtendrá la capacidad de que sus fotos se vean vitales.",
        img:"/imagenes/consejo2.png",
    },
    {
        subtitulo:"3. Presta atención a la luz.",
        cont:"Esta podría aparentar que es una técnica simple o que cualquiera podría hacer pero en realidad se necesita mucha practica para aprender a prestar la luz natural. Esta técnica es una de las más complicadas a la hora de tomar una buena fotografía pero también la que le da define la calidad que posea. Para aprender esta técnica es que a la hora de capturar practique, desde diferentes perspectivas y valore el nivel de luz y sombra sobre cada ángulo, pero OJO esto no se limita a luz del sol solamente sino también al anochecer.",
        img:"/imagenes/consejo3.png",
    },
    {
        subtitulo:"4. Utiliza luz natural.",
        cont:"Este consejo va de la mano con el anterior, la razón de esto es porque la luz natural le da la oportunidad de jugar con las sombras. Los fotógrafos profesionales prefieren esto a utilizar el flash debido a que la foto al utilizar el flash se ve sobreexpuesta.",
        img:"/imagenes/consejo4.png",
    },
    {
        subtitulo:"5. Utiliza la composición.",
        cont:"La composición básicamente consiste en saber disponer que objetos aparecerán en la foto. Cuando comienzas tomas un poco más de experiencia comienzas a elegir, acomodar o excluir sobre estos elementos. OJO es complicado hacer una composición por lo cual lo correcto es tratar de mantener la simplicidad en la foto. En dado caso que la foto tenga objetos tú puedes elegir como aparecerán.",
        img:"/imagenes/consejo5.png",
    },
    {
        subtitulo:"6. Usa líneas de cuadrícula (Regla de tercios).",
        cont:"Esta técnica es muy buena para mantener el equilibrio en la foto, esta basa en la   regla de los tercios es una guía de composición. Un principio de la composición fotográfica  dice que una imagen debe dividirse en tercios, tanto horizontal como verticalmente, por lo que tiene nueve partes en total. Esto también puede usarse para tomar retratos. Al usar la regla de los tercios existen cuatro puntos de interés, y esos son los puntos de intersección en ellos debes colocar tu tema principal en uno de esos puntos. Esto sirve para resaltar aquello que consideras importante en fotografía.",
        img:"/imagenes/consejo6.png",
    },
    {
        subtitulo:"7. Encuentra diferentes perspectivas.",
        cont:"No solo te limites a tomar desde un solo un ángulo, utiliza diferentes ángulos para tener una mejor toma. Está bien tomar la foto desde el ángulo normal que es frente a frente, pero al intentar desde diferentes ángulos obtendrás una foto única y memorable. Como guía puedes intentar tomar fotos desde el ángulo: picado, contrapicado, cenital y nadir.",
        img:"/imagenes/consejo7.png",
    },
];

function Body() {
    return (

        <div className="body">
            <div className='introduccion'>
                <br></br><br></br>
                <h1>7 consejos de fotografía para principiantes</h1>
                <br></br><br></br>
                <p>El mundo de la fotografía es un mundo donde no existen límites. 
                    Puedes dejar fluir tu imaginación tan lejos como quieres, además, de expresar 
                    tus sentimientos en ellos también puedes capturar momento memorables ya sea con la familia, 
                    amigos, tu pareja, viajes, mascotas, etc. En este artículo tenemos algunos 
                    fundamentos básicos para comenzar a introducirte este mundo, 
                    empezaremos desde el conocer tu herramienta a como tomar una buena foto utlizando técnicas simples . </p>
                <h2>__________________________________________________________________</h2>
            </div>

            <Consejo titulo={info[0].subtitulo} cuerpo={info[0].cont} img={info[0].img} />
            <Consejo titulo={info[1].subtitulo} cuerpo={info[1].cont} img={info[1].img} />
            <Consejo titulo={info[2].subtitulo} cuerpo={info[2].cont} img={info[2].img} />
            <Consejo titulo={info[3].subtitulo} cuerpo={info[3].cont} img={info[3].img} />
            <Consejo titulo={info[4].subtitulo} cuerpo={info[4].cont} img={info[4].img} />
            <Consejo titulo={info[5].subtitulo} cuerpo={info[5].cont} img={info[5].img} />
            <Consejo titulo={info[6].subtitulo} cuerpo={info[6].cont} img={info[6].img} />
           

        </div>
      );
}

export default Body;