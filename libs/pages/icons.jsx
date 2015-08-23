let {
    AppBar,
    IconButton,
    FontIcon
    } = MUI;

var Colors = MUI.Styles.Colors;

IconsPage = React.createClass({

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
                <h2>Icons</h2>
                <FontIcon className="fa fa-home" />
                &nbsp;
                <FontIcon className="fa fa-comments" color={Colors.red500} />
                &nbsp;
                <FontIcon className="fa fa-amazon" color={Colors.yellow500} />
                &nbsp;
                <FontIcon className="fa fa-internet-explore" color={Colors.blue500} />
                &nbsp;
                <FontIcon className="fa fa-area-chart"
                          hoverColor={Colors.greenA200} />
                &nbsp;
                <FontIcon className="fa fa-birthday-cake" color={Colors.red500}
                          hoverColor={Colors.greenA200} />
                &nbsp;
                <FontIcon className="fa fa-calendar" color={Colors.yellow500}
                          hoverColor={Colors.greenA200} />
                &nbsp;
                <FontIcon className="fa fa-camera" color={Colors.blue500}
                          hoverColor={Colors.greenA200} />
            </div>
        );

        return (
            <ContentWrapper>
                <Example demo={Demo} />
            </ContentWrapper>
        );
    }
});