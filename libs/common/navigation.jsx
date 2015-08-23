let { LeftNav, MenuItem } = MUI;

Navigation = React.createClass({

    getInitialState() {
        return {
            selectedIndex: 0
        }
    },

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext: function() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    toggle() {
        this.refs.nav.toggle();
    },

    onChange(e, selectedIndex, menuItem) {
        this.setState({
            selectedIndex: selectedIndex
        });
        FlowRouter.go(menuItem.route);
    },

    render() {
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
            "Tabs",
            "Text Fields",
            "Time Picker",
            "Toolbars"
        ];
        var menuItems = [];
        _.each(components, function(name) {
            var link = FlowRouter.path(name.toLowerCase().replace(/\s+/g, ''));
            menuItems.push({
                route: link,
                text: name
            });
        });

        var navHeader = (
            <div style={styles.Navigation.header}>Components</div>
        );
        return <LeftNav
                    ref="nav"
                    docked={false}
                    menuItems={menuItems}
                    header={navHeader}
                    selectedIndex={this.state.selectedIndex}
                    onChange={this.onChange}/>;
    }
});
