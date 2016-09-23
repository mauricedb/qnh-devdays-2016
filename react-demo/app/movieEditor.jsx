var React = require('react');

var InputText = require('./inputText.jsx');
var TextArea = require('./textArea.jsx');

class MovieEditor extends React.Component {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
        this.save = this.save.bind(this);
        this.toListMode = this.toListMode.bind(this);
    }

    onChange(e) {
        this.props.onChange(e);
    }

    toListMode(e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        this.props.toListMode(e)
    }

    save(e) {
        e.preventDefault();
        this.props.onSave();
    }

    render() {
        var movie = this.props.movie;
        var onChange = this.onChange;
        var abridgedDirectors = movie.abridgedDirectors
        if (Array.isArray(abridgedDirectors)) {
            abridgedDirectors = abridgedDirectors.join(', ');
        }
        
        return (
                <form>
                    <InputText value={movie.title}
                               prop='title'
                               onChange={onChange}>
                        Title
                    </InputText>
                    <InputText value={abridgedDirectors}
                               prop='abridgedDirectors'
                               onChange={onChange}>
                        Directors
                    </InputText>
                    <TextArea value={movie.criticsConsensus}
                               prop='criticsConsensus'
                               onChange={onChange}>
                        Critics Consensus
                    </TextArea>
                    <TextArea value={movie.synopsis}
                               prop='synopsis'
                               onChange={onChange}>
                        Synopsis
                    </TextArea>
                    <div className="form-group">
                        <label>
                            Year
                        </label>
                        <input type="text"
                            value={movie.year || ''}
                            className="form-control"
                            onChange={onChange}
                        />
                    </div>            
                    
                    <div className="form-group">
                        <button onClick={this.save}
                                className="btn btn-primary">
                            Save
                        </button>
                        <button onClick={this.toListMode}
                                className="btn btn-danger">
                            Cancel
                        </button>
                    </div>
                </form>);
    }
}

MovieEditor.propTypes = {
    movie: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSave: React.PropTypes.func.isRequired,
    toListMode: React.PropTypes.func.isRequired
};

module.exports = MovieEditor;
