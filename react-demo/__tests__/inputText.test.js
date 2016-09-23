var React = require('react');
var mount = require('enzyme').mount;

var InputText = require('../app/inputText.jsx');

describe('InputText', () => {
    it('should call onChange when changed', () => {
        var arg = null;

        const component = mount(
            <InputText value={'Kill Bill'}
                        prop='title'
                        onChange={e => arg = e}>
                Title
            </InputText>      
        );

        // console.log(component.debug());

        component
            .find('.form-control')
            .simulate('change', {
                target: {
                    value: 'Star wars'
                }
            });

        expect(arg).toEqual({
            prop: 'title',
            value: 'Star wars'
        })
    });

    it('should update the input when the value changes', () => {
        var arg = null;

        const component = mount(
            <InputText value={'Kill Bill'}
                        prop='title'
                        onChange={e => arg = e}>
                Title
            </InputText>      
        );

        component.setProps({value: 'Star wars'})

        var input = component
            .find('.form-control')
            .get(0);
        
        expect(input.value).toBe('Star wars');
    })
});
