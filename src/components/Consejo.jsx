import '../assets/styles/consejo.css'

function Consejo(props){
    

    return(
        <div className="consejo-container">
            <h3>{props.titulo}</h3><br></br>
            <p>{props.cuerpo}</p>
            <img src={props.img} alt="" />
        </div>
    )
}

export default Consejo;