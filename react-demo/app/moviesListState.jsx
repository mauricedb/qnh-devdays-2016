var React = require('react');
var $ = require('jquery');

var MoviesList = require('./moviesList.jsx');

class MoviesListState extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        $.getJSON('/api/movies')
            .then(movies => this.setState({
                movies: movies
            }));
    }

    render() {
        return <MoviesList movies={this.state.movies} 
                           toEditMode={this.props.toEditMode} />
    }
}

MoviesListState.propTypes = {
    toEditMode: React.PropTypes.func.isRequired
};

module.exports = MoviesListState;
