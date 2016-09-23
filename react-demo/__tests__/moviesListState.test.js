var React = require('react');
var mount = require('enzyme').mount;
var $ = require('jquery');

var MoviesListState = require('../app/moviesListState.jsx');

describe('MoviesListState', () => {
    it('Loads the movie collection in the componentDidMount', () => {
        const component = mount(
            <MoviesListState 
                toEditMode={() => {}}>
            </MoviesListState>      
        );

        expect($.getJSON).toBeCalledWith('/api/movies');
    });
});