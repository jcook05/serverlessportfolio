import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';




const MyWork = [

   {
        title: "Configuration Management",
        image: {
            desc: "Configuration Management examples", 
            src: "images/IMG_0111.JPG"
            
       } 
  },
  {
    title: "CICD",
    image: {
        desc: "Continuous Integration Continuous Deployment examples", 
        src: "images/IMG_0117.JPG"
       
   } 
},
{
    title: "Front End",
    image: {
        desc: "Front End examples", 
        src: "images/marmot.JPG"
       
   } 
}



]


ReactDOM.render(<ExampleWork work={MyWork}/>, document.getElementById('example-work'));


console.log("Loaded react-dom")
console.log("Webpack Worked!")
console.log("Expand your mind")