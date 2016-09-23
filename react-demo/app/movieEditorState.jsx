var React = require('react');
var $ = require('jquery');

var MovieEditor = require('./movieEditor.jsx');

class MovieEditorState extends React.Component {

    constructor() {
        super();

        this.state = {
            movie: {
                title: '',
                abridgedDirectors: '',
                criticsConsensus: '',
                synopsis: ''
            }
        };

        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onChange(e) {
        var movie = this.state.movie;
        movie[e.prop] = e.value;
        this.setState({movie: movie});
    }

    onSave() {
        $.ajax('/api/movies/' + this.props.id, {
            data: this.state.movie,
            type: 'put'
        }).then(() => this.props.toListMode());
    }

    componentDidMount() {
        $.getJSON('/api/movies/' + this.props.id)
            .then(movie => this.setState({
                movie: movie
            }));
    }

    render() {
        return <MovieEditor toListMode={this.props.toListMode} 
                            movie={this.state.movie}
                            onChange={this.onChange}
                            onSave={this.onSave} />
    }
}


module.exports = MovieEditorState;

