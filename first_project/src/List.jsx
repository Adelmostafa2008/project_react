import propTypes from 'prop-types'

function List(props){

    const itemlists = props.items;
    const cat = props.category ;
  

    const listitems = itemlists.map(itemlist => <li key = {itemlist.id}> name : {itemlist.name} , price :  {itemlist.price}</li>)
  
    return(<ul className="listitem"><h3 className="listcat">
        {cat} 
        </h3>
        {listitems}</ul>);
}

export default List;


List.defaultProps = {
    items : [] ,
    category : "Category" ,
};

List.propTypes = {
    category : propTypes.string,
    items : propTypes.arrayOf(propTypes.shape({id : propTypes.number,
                                               name : propTypes.string,
                                               price : propTypes.number }))
}