import React from 'react';


class ExampleWorkModal extends React.Component {

    render ()  {
        
        let example = this.props.example;
        let modalClass = this.props.open ? 'modal--open' : 'modal--closed'

        return (

      <div className={"background--lightGrey " + modalClass}>
      <span className="color--cloud modal__closeButton" onClick={ (evt) => { this.props.closeModal(evt) } }>
        <i className="fa fa-window-close-o"></i>
      </span>
      <img alt={ example.image.desc }
           className="modal__image"
           src={ example.image.src }/>
      <div className="color--black modal__text">
        <h2 className="modal__title">
          { example.title }
        </h2>
        <a className="color--skyBlue modal__link"
           href={ example.href + "?" +  example.key }>
          Check it out
        </a>
        <br></br> 
        <p  className="modal__description">
           {example.gdesc }
        </p>
        <a className="color--skyBlue modal__link"
           href={ example.github }>
          Github Examples
        </a>
        <p  className="modal__description">
           { example.desc }
        </p>
        <p  className="modal__description">
           { example.diagram.desc }
        </p>
        <img  alt={example.diagram.image.desc }
          
           src={ example.diagram.image.src}
        />
      </div>
    </div>

        )
    };

};

export default ExampleWorkModal;