var React = require('react');
var mount = require('enzyme').mount;

var MovieEditor = require('../app/movieEditor.jsx');

describe('MovieEditor', () => {
    it('should call onChange when changed', () => {
        var arg = null;
        var movie = {
            id: '1',
            title: 'Kill Bill',
            abridgedDirectors: ['Quentin Tarantino'],
            criticsConsensus: 'Good',
            synopsis: 'A revenge movie',
            year: 2003
        };

        const component = mount(
            <MovieEditor  movie={movie}
                onChange={e => arg = e}
                onSave={() => {}}
                toListMode={() => {}}>
            </MovieEditor>      
        );

        component.find('[value="Kill Bill"]')
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

    it('should go to the list view when the cancel button is clicked', () => {
        var canceled = false;

        var movie = {
            id: '1',
            title: 'Kill Bill',
            abridgedDirectors: ['Quentin Tarantino'],
            criticsConsensus: 'Good',
            synopsis: 'A revenge movie',
            year: 2003
        };

        const component = mount(
            <MovieEditor  movie={movie}
                onChange={() => {}}
                onSave={() => {}}
                toListMode={() => canceled = true}>
            </MovieEditor>      
        );

        component
            .find('.btn-danger')
            .simulate('click');

        expect(canceled).toBe(true);
    })

    it('should save the movie when the save button is clicked', () => {
        var saved = false;

        var movie = {
            id: '1',
            title: 'Kill Bill',
            abridgedDirectors: ['Quentin Tarantino'],
            criticsConsensus: 'Good',
            synopsis: 'A revenge movie',
            year: 2003
        };

        const component = mount(
            <MovieEditor  movie={movie}
                onChange={() => {}}
                onSave={() => saved = true}
                toListMode={() => {}}>
            </MovieEditor>      
        );

        component
            .find('.btn-primary')
            .simulate('click');

        expect(saved).toBe(true);
    })
});
