import prTypes from 'prop-types'

function Greating(props){

    const logge = <h2 className="logged">
        Welcome back {props.name}
        </h2>
    const not_logge = <h2 className="not_logged">
        Please login to contiue
        </h2>

    return(props.logged == true ? logge : not_logge);


}


Greating.defaultProps = {
    logged : false,
    name : "guest"
}

Greating.prTypes = {
    logged : prTypes.bool,
    name : prTypes.string
} 

export default Greating