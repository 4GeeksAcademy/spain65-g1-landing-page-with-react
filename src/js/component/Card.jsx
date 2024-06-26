import React from "react";
import PropTypes from "prop-types";
import rigoBaby from "../../img/rigo-baby.jpg";


export const Card = (props) => {
  return (
    <>
      <div className="card" style={{width: '18rem'}}>
        <img src={props.imageURL} className="card-img-top" alt={props.imageAlt}/>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href="#" className="btn btn-primary">{props.textButtom}</a>
          </div>
      </div>
    </>
  )
}
Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  textButtom: PropTypes.string,
  imageURL: PropTypes.string,
  imageAlt: PropTypes.string
}

Card.defaultProps = {
  title: 'Card',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus purus arcu, sollicitudin sodales nibh accumsan quis. Sed lobortis erat eget arcu eleifend, sed dictum lorem hendrerit.',
  textButtom: 'Find out more',
  imageURL: rigoBaby,
  imageAlt: 'rigoBaby'
}

export default Card;


