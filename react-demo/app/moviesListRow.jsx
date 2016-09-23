var React = require('react');

class MoviesListRow extends React.Component {
    render() {
        const movie = this.props.movie;
        
        return (
            <tr>
                <td>{movie.title}</td>
                <td>{movie.abridgedDirectors.join(', ')}</td>
                <td style={{width: 1}}>
                    <button onClick={() => this.props.toEditMode({id: movie.id})} 
                            className="btn btn-default btn-xs edit-button">
                        Edit
                    </button>
                </td>
            </tr>
        ); 
    }
}

MoviesListRow.propTypes = {
    movie: React.PropTypes.object.isRequired,
    toEditMode: React.PropTypes.func.isRequired
};

module.exports = MoviesListRow;
