import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import ExampleWork, { ExampleWorkBubble} from '../js/example-work';



configure({ adapter: new Adapter() });

const myWork = [ {
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



];

// ensure versions of adapter match your react-dom and react-test-renderer.   enzyme-adapter-react-16 for version 16 of react-dom and test-renderer.
describe("ExampleWork tests", () => { 


    const ework = shallow(<ExampleWork work={myWork} />);

    it("Should be a 'section' element", () => {
       
        //console.log(ework.debug());
        expect(ework.type()).toEqual('section');
        

    });

    it("Component Children count = myWork length", () => {
       
        //console.log(ework.debug());
        expect(ework.find("ExampleWorkBubble").length).toEqual(myWork.length);
        

    });

});

describe("ExampleWorkBubble tests", () => { 


    let workbubble = shallow(<ExampleWorkBubble example={myWork[1]}/>);
    let images = workbubble.find("img");

    it("Should contain 1 image", () => {
       
        
        expect(images.length).toEqual(1);
        

    });

    it("Image source set correctly", () => {
       
        //console.log(ework.debug());
        // This is deprecated as node is now hidden by Enzyme
        //expect(images.node.props.src).toEqual(myWork[1].image.src);
        expect(images.get(0).props.src).toEqual(myWork[1].image.src);
        

    });

});
