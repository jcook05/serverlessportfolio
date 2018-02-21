import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';
import CodeSample from './code-sample';





const MyWork = [

   {
        title: "Configuration Management",
        key: "cm",
        desc: "Configuration Management examples",
        href: "../codesample.html",
        github: "https://github.com/jcook05/ansible",
        image: {
            desc: "Configuration Management examples", 
            src: "images/IMG_0111.JPG"
            
       },
       diagram: {
        desc: "DIAGRAM:",
        image: ""     

   } 
  },
  {
    title: "CICD",
    key: "cicd",
    desc: "CICD example code, Jenkins build and deploy",
    href: "../codesample.html",
    github: "../comingsoon.html",
    image: {
        desc: "Continuous Integration Continuous Deployment examples", 
        src: "images/IMG_0117.JPG"
       
   },
   diagram: {
    desc: "DIAGRAM:  Jenkins Docker Kubernetes Dev Environment",
    image: {
        src: "images/jendk.jpg",
        desc: "CICD example code, Jenkins build and deploy"  
    }
} 

},
{
    title: "Front End",
    key: "frontend",
    desc: "Here are some front end development examples.  I have some examples in react.js as well as some examples in standard javascript.   This portfolio is also written primarily in \
    react.js leveraging several react components.  Typically my front end development would focus on internal tools used by the development teams for infrastructure and CICD. You can view the \
    basic examples in the CHECK IT OUT and GIT HUB EXAMPLES links above."  ,
    href: "../codesample.html",
    github: "https://github.com/jcook05/serverlessportfolio",
    image: {
        desc: "Front End Example Code", 
        src: "images/marmot.JPG"
       
   }, 
   
   diagram: {
        desc: "DIAGRAM: Serverless CICD for this Portfolio",
        image: {
                 src: "images/newport.jpg",
                 desc: "Portfolio CICD Diagram"
        }     

   }
}



]

// need javascript conditional

if (document.getElementById('example-work'))
{
ReactDOM.render(<ExampleWork work={MyWork}/>, document.getElementById('example-work'));
}

else if (document.getElementById('test-work'))
{
ReactDOM.render(<CodeSample />, document.getElementById('test-work'));
}



console.log("Loaded react-dom")
console.log("Webpack Worked!")
console.log("Expand your mind")