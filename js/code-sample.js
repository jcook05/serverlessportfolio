import React from 'react';


const reactsample = [

  {
       title: "React Class",
       code: `import React from 'react';


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
       
      },
 {
  title: "React Class 2",
  code: `  import React from 'react';
  import ReactDOM from 'react-dom';
  import ExampleWork from './example-work';
  import CodeSample from './code-sample';
   
  
  
  const MyWork = [
  
     {
          title: "Configuration Management",
          key: "cm",
          desc: "Configuration Management examples",
          href: "../cm.html",
          github: "https://github.com/jcook05/ansible",
          image: {
              desc: "Configuration Management examples", 
              src: "images/IMG_0111.JPG"
              
         } 
    },
    {
      title: "CICD",
      key: "cicd",
      desc: "CICD example code, Jenkins build and deploy",
      href: "../cicd.html",
      github: "../comingsoon.html",
      image: {
          desc: "Continuous Integration Continuous Deployment examples", 
          src: "images/IMG_0117.JPG"
         
     } 
  },
  {
      title: "Front End",
      key: "frontend",
      desc: "Front end example code",
      href: "../codesample.html",
      github: "https://github.com/jcook05/serverlessportfolio",
      image: {
          desc: "Front End examples", 
          src: "images/marmot.JPG"
         
     } 
  }
  
  
  
  ]
  
 
  if (document.getElementById('example-work'))
  {
  ReactDOM.render(<ExampleWork work={MyWork}/>, document.getElementById('example-work'));
  }
  
  else if (document.getElementById('test-work'))
  {
  ReactDOM.render(<CodeSample />, document.getElementById('test-work'));
  }`
  
 }
 



]



class CodeSample extends React.Component {

  constructor(props) {
    super(props);
    //console.log(window.location.search);

    this.querystring = window.location.search;
    this.key = this.querystring.substring(1)

    //console.log(this.key)


    this.state = {
  
      'codeType': this.key
    }


    //console.log(this.state.codeType);


    
    
    }

      
    render ()  {

      let columns = null;
      let samples = null;
      let samples1 = null;

      console.log(this.state.codeType)

      if(this.state.codeType == "frontend") {

        console.log("frontendfound")

        samples = <section className='window'>
        <label>{ reactsample[0].title }</label>
          <pre>
            { reactsample[0].code }
          </pre>
      </section>;

        samples1 = <section className='window'>
        <label>{ reactsample[1].title }</label>
        <pre>
        { reactsample[1].code }
        </pre>
        </section>; 

    for (var i = 0; i < reactsample; i++) {
        // note: we add a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html

        samples = <section className='window'>
        <label>{ reactsample[i].title }</label>
          <pre>
            { reactsample[i].code }
          </pre>
       </section>;  

        columns.push(<ObjectColumn key={i} samples />);
      }


      }

        return (

                      
          <section className="section--code">
          <table>
            <tbody>
           <tr> 
           <td> { samples } </td>
           <td> { samples1 } </td>
           
           </tr>
           </tbody>
           </table>
            
          </section>
    
        
        );
        
      
      
        

       
    };



};

export default CodeSample;




