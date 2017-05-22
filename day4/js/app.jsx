var Header = require("./navigation/header.js");
import Footer from "./navigation/footer.js";
import Section from "./section/section.js";

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

ReactDOM.render(
    (
        <div>
            <Abc/>
        </div>
    ), 
    document.getElementById('content')
);
