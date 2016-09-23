var React = require('react');

var MoviesListRow = require('./moviesListRow.jsx');

var MoviesList = function(props) {
    var rows = props.movies.map(movie => (
        <MoviesListRow key={movie.id} 
                       movie={movie} 
                       toEditMode={props.toEditMode}/>)
        ); 

    return (
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Directors</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}

MoviesList.propTypes = {
    movies: React.PropTypes.array.isRequired,
    toEditMode: React.PropTypes.func.isRequired
};

module.exports = MoviesList;
