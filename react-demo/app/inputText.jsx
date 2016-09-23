var React = require('react');

var InputText = function(props) {
    return (
        <div className="form-group">
            <label>
                {props.children}
            </label>
            <input type="text"
                value={props.value || ''}
                className="form-control"
                onChange={e => props.onChange({
                    value: e.target.value, 
                    prop: props.prop
                })}
            />
        </div>            
    );
}

InputText.propTypes = {
    value: React.PropTypes.string.isRequired,
    prop: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
};

module.exports = InputText;
