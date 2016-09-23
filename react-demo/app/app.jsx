var React = require('react');
var ReactDOM = require('react-dom');

var MoviesListState = require('./moviesListState.jsx');
var MovieEditorState = require('./movieEditorState.jsx');

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            id: '',
            editMode: false
        };

        this.toEditMode = this.toEditMode.bind(this);
        this.toListMode = this.toListMode.bind(this);
    }

    toEditMode(e) {
        console.log('toEditMode', e.id);
        this.setState({
            id: e.id,
            editMode: true
        });
    }

    toListMode(e) {
        console.log('toListMode');
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        this.setState({
            editMode: false
        });
    }

    render() {
        var component;

        if (this.state.editMode) {
            component = <MovieEditorState id={this.state.id} 
                                          toListMode={this.toListMode} />;
        }
        else {
            component = <MoviesListState toEditMode={this.toEditMode}/>;
        }

        return <div>
            <h1>ReactJS Demo</h1>
            {component}
        </div>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
