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