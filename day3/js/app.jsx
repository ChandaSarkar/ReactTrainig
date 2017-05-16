var Abc = React.createClass({
    render: function() {
        return (
            <div>
                <div>Abc</div>
                <AbcSecond name="chanda"/>
            </div>
        );
    }
});

var AbcSecond = React.createClass({
    render: function() {
        var userData = this._getUserData();

        return (
            <div>
                <div>
                    <Header name="Sunanda" />
                    <Section user={userData} />
                    <Footer />
                </div>
            </div>
        );
    },
    _getUserData: function() {
        return {
            name: "Chanda",
            job: "IT"
        };
    }
});

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

var Footer = React.createClass({
    render: function() {
        return (<footer>
                        Some footer
                    </footer>);
    }
});

ReactDOM.render(
    (
        <div>
            <Abc/>
        </div>
    ), 
    document.getElementById('content')
);