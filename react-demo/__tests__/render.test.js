var React = require('react');
var renderer = require('react-test-renderer');

var MoviesList = require('../app/moviesList.jsx');
var MovieEditor = require('../app/movieEditor.jsx');

var InputText = require('../app/inputText.jsx');
var TextArea = require( '../app/textArea.jsx');

describe('All components should render correctly', () => {
    it('empty MoviesList', () => {
        const tree = renderer.create(
            <MoviesList movies={[]} 
                        toEditMode={() => {}} />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('non empty MoviesList', () => {
        const tree = renderer.create(
            <MoviesList  movies={[{
                id: '1',
                title: 'Kill Bill',
                abridgedDirectors: ['Quentin Tarantino']
            }]}
            toEditMode={() => {}}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('empty MovieEditor', () => {
        const tree = renderer.create(
            <MovieEditor movie={{
                            id: '',
                            title: '',
                            abridgedDirectors: [],
                            criticsConsensus: '',
                            synopsis: '',
                            year: 0
                         }} 
                         onSave={() => {}}
                         toListMode={() => {}}
                         onChange={() => {}} 
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('non empty MovieEditor', () => {
        const tree = renderer.create(
            <MovieEditor movie={{
                            id: '1',
                            title: 'Kill Bill',
                            abridgedDirectors: ['Quentin Tarantino'],
                            criticsConsensus: 'Good',
                            synopsis: 'A revenge movie',
                            year: 2003
                         }} 
                         onSave={() => {}}
                         toListMode={() => {}}
                         onChange={() => {}} 
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('InputText', () => {
        const tree = renderer.create(
            <InputText value={'Kill Bill'}
                        prop='title'
                        onChange={() => {}}>
                Title
            </InputText>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('TextArea', () => {
        const tree = renderer.create(
            <TextArea value={'movie.criticsConsensus'}
                    prop='criticsConsensus'
                    onChange={() => {}}>
                Critics Consensus
            </TextArea>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});

