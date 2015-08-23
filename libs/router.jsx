ComponentRoute = FlowRouter.group({
    prefix: "/components"
});

var components = [
    "AppBar",
    "Avatars",
    "Buttons",
    "Cards",
    "DatePicker",
    "Dialog",
    "DropDown Menu",
    "Icons",
    "Icons Buttons",
    "Icons Menus",
    "Lists",
    "Menus",
    "Paper",
    "Progress",
    "Refresh Indicator",
    "Sliders",
    "Switches",
    "Snackbar",
    "Table",
    "Tabs",
    "Text Fields",
    "Time Picker",
    "Toolbars"
];

_.each(components, function(label) {
    var routeName = label.toLowerCase().replace(/\s+/g, '');
    var compName = label.replace(/\s+/g, '') + "Page";
    ComponentRoute.route('/' + routeName, {
        name: routeName,
        action() {
            var content = React.createElement(eval(compName));
            ReactLayout.render(MainLayout, {content: content});
        }
    });
});

FlowRouter.route('/', {
    action: function() {
        FlowRouter.go("appbar")
    }
});