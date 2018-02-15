import React from 'react';


const sampletest = `import React from 'react';


class ExampleWorkModal extends React.Component {

    render ()  {
        
        let example = this.props.example;
        let modalClass = this.props.open ? 'modal--open' : 'modal--closed'

        return (

      <div className={"background--skyBlue " + modalClass}>
      <span className="color--cloud modal__closeButton" onClick={ (evt) => { this.props.closeModal(evt) } }>
        <i className="fa fa-window-close-o"></i>
      </span>
      <img alt={ example.image.desc }
           className="modal__image"
           src={ example.image.src }/>
      <div className="color--cloud modal__text">
        <h2 className="modal__title">
          { example.title }
        </h2>
        <a className="color--skyBlue modal__link"
           href={ example.href }>
          Check it out
        </a>
        <br></br> <br></br>
        <a className="color--skyBlue modal__link"
           href={ example.github }>
          Github Examples
        </a>
        <p  className="modal__description">
           { example.desc }
        </p>
      </div>
    </div>



        )


    };



};

export default ExampleWorkModal;`

class CodeSample extends React.Component {

    render ()  {
        
          

        return (

          <section className="section--code">
            
            <section class='window'>
            <label>React Class</label>
              <pre>
                { sampletest }
              </pre>
          </section>
      
      
          </section>




        )


    };



};

export default CodeSample;