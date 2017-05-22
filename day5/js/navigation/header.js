var Header = React.createClass({
    getDefaultProps: function() {
        return {
            user: {
                name: "No one", newjob: "none"
            },
            jobtype: "JOBTYPE"
        };
    },
    render: function() {
        return (<header>Welcome to React training! {this.props.name} {this.props.user.newjob}
             &nbsp;&nbsp;&nbsp;
             {this.props.jobtype}
        </header>);
    }
});

module.exports = Header;