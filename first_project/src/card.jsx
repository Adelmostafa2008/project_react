import picture from './assets/default.png'

function Card(props){
    return(
        <>
        <div className="card">
        <img alt="profile pic" src={props.pic} className="pic"></img>
        <h2>{props.name}</h2>
        <p>{props.paragraph}</p>
        </div>

        
        </>
    );
}
Card.defaultProps = {
    name : "guest",
    pic : picture,
    paragraph : "no bithes ??",
   
}
export default Card