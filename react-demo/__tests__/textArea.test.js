var React = require('react');
var mount = require('enzyme').mount;

var TextArea = require('../app/textArea.jsx');

describe('TextArea', () => {
    it('should call onChange when changed', () => {
        var arg = null;

        const component = mount(
            <TextArea value={'Kill Bill'}
                        prop='title'
                        onChange={e => arg = e}>
                Title
            </TextArea>      
        );

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
            <TextArea value={'Kill Bill'}
                        prop='title'
                        onChange={e => arg = e}>
                Title
            </TextArea>      
        );

        component.setProps({value: 'Star wars'});

        var input = component
            .find('.form-control')
            .get(0);
        
        expect(input.value).toBe('Star wars');
    })
});
