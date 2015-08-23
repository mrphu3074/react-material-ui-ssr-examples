let {
    AppBar,
    IconButton,
    FontIcon,
    IconMenu,
    List,
    ListItem,
    ListDivider
    } = MUI;

var Colors = MUI.Styles.Colors;
let {Menu, MenuItem} = MUI.Libs;

MenusPage = React.createClass({

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext: function () {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    render() {

        var Demo = (
            <div>
                <h2>Menus</h2>
                <Menu desktop={true} style={ {position: "relative", width: "240px"} }>
                    <MenuItem primaryText="Maps" />
                    <MenuItem primaryText="Books" />
                    <MenuItem primaryText="Flights" />
                    <MenuItem primaryText="Apps" />
                </Menu>
            </div>
        );

        return (
            <ContentWrapper>
                <Example demo={Demo} />
            </ContentWrapper>
        );
    }
});