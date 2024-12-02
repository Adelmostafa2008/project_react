import picture from './assets/default.png'

function Card({ name , pic ,paragraph }){
    return(
        <>
        <div className="card">
        <img alt="profile pic" src={pic} className="pic"></img>
        <h2>{name}</h2>
        <p>{paragraph}</p>
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