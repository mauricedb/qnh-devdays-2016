var movie = {
    id: '1',
    title: 'Kill Bill',
    abridgedDirectors: ['Quentin Tarantino'],
    criticsConsensus: 'Good',
    synopsis: 'A revenge movie',
    year: 2003
};

module.exports = {
    getJSON: jest.fn(function(url) {
        if (url === '/api/movies') {
            return Promise.resolve([movie]);
        } else if (url === '/api/movie/1') {
            return Promise.resolve(movie);
        }
        return Promise.reject();
    })
};