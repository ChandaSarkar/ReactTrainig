var Dispatcher = require("./../lib/Dispatcher.js");
var ListStore = require("./list-store.js");
var MircoEvent = require("./../lib/microevent.js");

var AppDispatcher = new Dispatcher();
MircoEvent.mixin(ListStore);

var Section = React.createClass({
    _addNewItem: function() {
        var item = document.getElementById("todoList").value;

        AppDispatcher.dispatch({
            actionName: "new-item",
            data: {taskName: item}
        });

        this.itemAdded = true;
    },
    componentDidMount: function() {
        ListStore.bind("change", this._onListChanged);
    },
    componentWillUnmount: function() {
        console.log("will unmount is not getting called");
        ListStore.unbind("change", this._onListChanged);
    },
    _onListChanged: function() {
        console.log("called");
        this.forceUpdate();
    },
    render: function() {
        if(this.itemAdded) {
            var items = ListStore.items;
            var itemHtml = items.map(function(item) {
                return (
                    <li>{item}</li>
                );
            });
        }
        if (itemHtml === "") {
            itemHtml = "No item in list";
        }
        return (
            <div>
                <section>   
                    <input type="text" id ="todoList" />
                    <button onClick={this._addNewItem}>Add Item</button>
                    <ul>
                        {itemHtml}
                    </ul>
                </section>
            </div>
        );
    }
});


AppDispatcher.register(function(action){
     switch (action.actionName) {
        case "new-item": 
            ListStore.items.push(action.data.taskName);
            ListStore.trigger('change');
        break;
    }
});
module.exports = Section;