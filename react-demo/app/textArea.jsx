var React = require('react');

var TextArea = function(props) {
    return (
        <div className="form-group">
            <label>
                {props.children}
            </label>
            <textarea value={props.value || ''}
                      className="form-control"
                      onChange={e => props.onChange({
                          value: e.target.value, 
                          prop: props.prop
                      })}
                      rows="5"
            />
        </div>
        
    );
}

TextArea.propTypes = {
    value: React.PropTypes.string.isRequired,
    prop: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
};

module.exports = TextArea;
