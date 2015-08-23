let {
    AppBar,
    IconButton,
    NavigationClose,
    FlatButton
    } = MUI;

AppBarPage = React.createClass({

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
                <h2>AppBar</h2>
                <AppBar
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more" />

                <br/>

                <AppBar
                    title="Title"
                    iconElementRight={<FlatButton label="Save" />} />
            </div>
        );

        return (
            <ContentWrapper>
                <Example demo={Demo} />
            </ContentWrapper>
        );
    }
});