var Section = React.createClass({
    getInitialState: function() {
        return {
            city: "Pune"
        };
    },
    _changeState: function(event) {
        this.setState({city: event.target.value});
    },
    render: function() {
        return (
            <section>
                NAME: {this.props.user.name} <br/>
                CITY: {this.state.city} <br/>
                <input type="text" onChange={this._changeState} />
            </section>
        );
    }
});

module.exports = Section;