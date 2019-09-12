import React from 'react';

import * as sampleData from './code-sample-data';

const reactsample = sampleData.reactsample;
const cmsample = sampleData.cmsample;
const cicdsample = sampleData.cicdsample;
const awssample = sampleData.awssample;
const slssample = sampleData.slssample;
const edssample = sampleData.edssample;

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
    this.stateSet = this.stateSet.bind(this); 
    }

    stateSet(codetype) {
      // set state = open
      // set example
      this.setState({
  
        'codeType': codetype
      }
      )
  }

      
    render ()  {

      let items = [];

      console.log(this.state.codeType)
      if(this.state.codeType == "frontend") {
        console.log("frontendfound")
        items = reactsample;
      }
      if(this.state.codeType == "cm") {
        console.log("cmfound")
        items = cmsample;
      }

      if(this.state.codeType == "cicd") {
        console.log("cicdfound")
        items = cicdsample;
      }

      if(this.state.codeType == "aws") {
        console.log("awsfound")
        items = awssample;
      }

      if(this.state.codeType == "serverless") {
        console.log("serverless")
        items = slssample;
      }
      if(this.state.codeType == "eds") {

        console.log("eds")
        items = edssample;
      }

        return (        
          <section className="section__exampleWrapper">
          <table>
            <tbody>
           <tr> 
           {items.map(item =>
           <TColumn data={item} key={item.title} /> )}
           </tr>
           </tbody>
           </table>
            
          </section>
    
        );
              
    };



};

const TColumn = (props) => <td> 
           <section className='window'>
           <label>{ props.data.title }</label>
           <pre>
           { props.data.code }
           </pre>
           </section> </td>

export default CodeSample;




