let {
    AppBar,
    IconButton,
    FontIcon
    } = MUI;

var Colors = MUI.Styles.Colors;

IconsButtonsPage = React.createClass({

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
                <h2>Icon Button</h2>
                <IconButton iconClassName="fa fa-github" tooltip="GitHub"/>
                &nbsp;
                <IconButton tooltip="Sort" disabled={true}>
                    <FontIcon className="fa fa-sort"/>
                </IconButton>
            </div>
        );

        return (
            <ContentWrapper>
                <Example demo={Demo} />
            </ContentWrapper>
        );
    }
});