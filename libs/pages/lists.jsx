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
let MenuItem = MUI.Libs.MenuItem;

ListsPage = React.createClass({

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
                <h2>Lists</h2>
                <List>
                    <ListItem primaryText="Inbox"  />
                    <ListItem primaryText="Starred"  />
                    <ListItem primaryText="Sent mail"  />
                    <ListItem primaryText="Drafts" />
                    <ListItem primaryText="Inbox"  />
                </List>
                <ListDivider />
                <List>
                    <ListItem primaryText="All mail" />
                    <ListItem primaryText="Trash"  />
                    <ListItem primaryText="Spam"  />
                    <ListItem primaryText="Follow up"   />
                </List>
            </div>
        );

        return (
            <ContentWrapper>
                <Example demo={Demo} />
            </ContentWrapper>
        );
    }
});