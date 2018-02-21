import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import ExampleWorkModal  from '../js/example-work-modal';



configure({ adapter: new Adapter() });


const myWork = [

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

// ensure versions of adapter match your react-dom and react-test-renderer.   enzyme-adapter-react-16 for version 16 of react-dom and test-renderer.
describe("ExampleWorkModal tests", () => { 

    

    let mockCloseModalFn = jest.fn();
    const modal = shallow(<ExampleWorkModal example={myWork[0]} open={false}/>);
    const openModal = shallow(<ExampleWorkModal example={myWork[0]} open={open} closeModal={mockCloseModalFn}/>);
    


    let anchors = modal.find("a")

    let paragraphs = modal.find("p")
    let header2 = modal.find("h2");
    let images = modal.find("img");

    it("Should be a 'div' element", () => {
       
        //console.log(ework.debug());
        expect(modal.type()).toEqual('div');
        

    });

    it("open set correctly", () => {
       
        //console.log(ework.debug());
        expect(modal.find(".background--skyBlue").hasClass("modal--closed")).toBe(true);
        expect(openModal.find(".background--skyBlue").hasClass("modal--open")).toBe(true);
        

    });

    it("Should call closeModal on click", () => {
       
        // used just 1 class from className="color--cloud modal__closeButton"
        openModal.find(".modal__closeButton").simulate('click');
        
        expect(mockCloseModalFn).toHaveBeenCalled();
        

    });

    it("Should contain an a element", () => {
       
        //console.log(ework.debug());
        expect(anchors.length).toEqual(2);
        

    });

    it("Link set correctly", () => {
       
        //console.log(ework.debug());
        // This is deprecated as node is now hidden by Enzyme
        //expect(images.node.props.src).toEqual(myWork[0].image.src);
        // use get() instead to get by index
        expect(anchors.get(0).props.href).toEqual(myWork[0].href + "?" + myWork[0].key);
        

    });

    it("Github set correctly", () => {
       
        
        expect(anchors.get(1).props.href).toEqual(myWork[0].github);
        

    });

    it("Desc set correctly", () => {
       
       
        paragraphs.forEach((node) => {
            console.log(node.text())
          });

       // view props
       console.log(paragraphs.get(0).props)

       // used props.children
       expect(paragraphs.get(0).props.children).toEqual(myWork[0].desc);
        

    });


    it("Desc set correctly", () => {
       
       
        
       // view props
       console.log(paragraphs.get(1).props)

       // used props.children
       expect(paragraphs.get(1).props.children).toEqual(myWork[0].diagram.desc);
        

    });

   

    it("Title set correctly", () => {
       
        
        //use childAt for text;
        expect(header2.childAt(0).text()).toEqual(myWork[0].title);
        

    });

    it("Image Description set correctly", () => {
       
        
        //use childAt for text;
        expect(images.get(0).props.alt).toEqual(myWork[0].image.desc);
        

    });

    it("Image Source set correctly", () => {
       
        
        //use childAt for text;
        expect(images.get(0).props.src).toEqual(myWork[0].image.src);
        

    });


});
