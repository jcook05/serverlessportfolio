import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import CodeSample  from '../js/code-sample';



configure({ adapter: new Adapter() });





const reactsample = [

                    {

                        title: "test1",
                        code:  'front end sample code'

                    },

                    {

                        title: "test2",
                        code:  'front end sample code too'

                    }

]

const cmsample = [

    {

        title: "test1",
        code:  'cm sample code'

    },

    {

        title: "test2",
        code:  'cm sample code too'

    }

]


const cicdsample = [

    {

        title: "test1",
        code:  'cicd sample code'

    },

    {

        title: "test2",
        code:  'cicd sample code too'

    }

]


describe("CodeSample tests", () => { 

    

    
    const codesample = shallow(<CodeSample />);
    


   

    it("Should be a 'section' element", () => {
       
        codesample.instance().stateSet("frontend");
        expect(codesample.type()).toEqual('section');
        

    });
    it("Code type set correctly", () => {
       
       
        codesample.instance().stateSet("frontend");
        expect(codesample.instance().state.codeType).toEqual('frontend');
        

    });
    

    
    it("Should be a 'section' element", () => {
       
        codesample.instance().stateSet("cm");
        expect(codesample.type()).toEqual('section');
        

    });

    it("Code type set correctly", () => {
       
       
        codesample.instance().stateSet("cm");
        expect(codesample.instance().state.codeType).toEqual('cm');
        

    });

    it("Should be a 'section' element", () => {
       
        codesample.instance().stateSet("cm");
        expect(codesample.type()).toEqual('section');
        

    });
    
    it("Code type set correctly", () => {
       
       
        codesample.instance().stateSet("cicd");
        expect(codesample.instance().state.codeType).toEqual('cicd');
        

    });
    


});
