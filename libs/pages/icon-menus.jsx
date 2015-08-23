let {
    AppBar,
    IconButton,
    FontIcon,
    IconMenu
    } = MUI;

var Colors = MUI.Styles.Colors;
let MenuItem = MUI.Libs.MenuItem;

IconsMenusPage = React.createClass({

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext: function () {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    render() {
        var button = (
            <IconButton>
                <FontIcon className="fa fa-github"/>
            </IconButton>
        );

        var Demo = (
            <div>
                <h2>Icon Menus</h2>
                <IconMenu iconButtonElement={button} openDirection="bottom-right">
                    <MenuItem primaryText="Refresh" index={0} />
                    <MenuItem primaryText="Send feedback" index={1} />
                    <MenuItem primaryText="Settings" index={2} />
                    <MenuItem primaryText="Help" index={3} />
                    <MenuItem primaryText="Sign out" index={4} />
                </IconMenu>
            </div>
        );

        return (
            <ContentWrapper>
                <Example demo={Demo} />
            </ContentWrapper>
        );
    }
});