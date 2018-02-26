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
        gdesc: "Github contains code for demonstration purposes not actual client deliverables.",
        github: "https://github.com/jcook05/ansible",
        image: {
            desc: "Configuration Management examples", 
            src: "images/IMG_0111.JPG"
            
       },
       diagram: {
        desc: "",
        image: ""     

   } 
  },
  {
    title: "CICD",
    key: "cicd",
    desc: "CICD example code, Jenkins build and deploy",
    href: "../codesample.html",
    gdesc: "Github contains code for demonstration purposes not actual client deliverables.",
    github: "../comingsoon.html",
    image: {
        desc: "Continuous Integration Continuous Deployment examples", 
        src: "images/IMG_0117.JPG"
       
   },
   diagram: {
    desc: "DIAGRAM:  A CICD flow illustrating an AWS, Jenkins, Docker and Kubernetes environment.",
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
    react.js leveraging several react components, npm, webpack, enzyme and jest.  Typically my front end development would focus on internal tools for infrastructure and CICD.",
    href: "../codesample.html",
    gdesc: "Github contains code for demonstration purposes not actual client deliverables.",
    github: "https://github.com/jcook05/serverlessportfolio",
    gdesc: "Github contains code for demonstration purposes not actual client deliverables.",
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
},

{
    title: "AWS Python",
    key: "aws",
    desc: "Python function libraries leveraging boto2 and boto3 for AWS automation.  Libraries would be maintained and reused throughout the DevOps team. Reusing libraries \
    ensures consistency within a team, increases efficiency and decreases cost."  ,
    href: "../codesample.html",
    gdesc: "Github contains code for demonstration purposes not actual client deliverables.",
    github: "https://github.com/jcook05/aws",
    image: {
        desc: "Python AWS Libraries", 
        src: "images/IMG_0117.JPG"
       
   }, 
   
   diagram: {
        desc: "",
        image: {
                 src: "",
                 desc: ""
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