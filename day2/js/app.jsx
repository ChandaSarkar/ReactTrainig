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
        return (
            <div>
                <div>
                    Hello {this.props.name}
                    <header>Welcome to React training!</header>
                    <section>
                        Some Content
                    </section>
                    <footer>
                        Some footer
                    </footer>

                </div>
            </div>
        );
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