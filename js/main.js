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
    github: "https://github.com/jcook05/serverlessportfolio/blob/master/buildspec.yml",
    image: {
        desc: "Continuous Integration Continuous Deployment examples.  See the buildspec.yml and deploy.py for some of the CICD wiring for this site.", 
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
     desc: "Front end example code",
     href: "../codesample.html",
     gdesc: "Github contains code for demonstration purposes not actual client deliverables.",
     github: "https://github.com/jcook05/serverlessportfolio/blob/master/buildspec.yml",
     image: {
         desc: "Front end example code", 
         src: "images/IMG_0117.JPG"
        
    },
    diagram: {
     desc: "Serverless React.js site CICD Flow",
     image: {
         src: "images/newport.jpg",
         desc: "Portfolio example CICD"  
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
},

{
    title: "Serverless Framework",
    key: "serverless",
    desc: "Examples of microservices implemented in various languages using the Serverless Framework",
    href: "../codesample.html",
    gdesc: "Github contains code for demonstration purposes not actual client deliverables.",
    github: "https://github.com/jcook05/Serverless",
    image: {
        desc: "Serverless Framework", 
        src: "images/IMG_0117.JPG"
       
   }, 
   
   diagram: {
        desc: "",
        image: {
                 src: "",
                 desc: ""
        }     

   }
},

{
    title: "Terraform",
    key: "Terraform",
    desc: "Terraform Examples",
    href: "https://github.com/jcook05/terraform",
    gdesc: "Github contains code for demonstration purposes not actual client deliverables.",
    github: "https://github.com/jcook05/terraform",
    image: {
        desc: "Terraform", 
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