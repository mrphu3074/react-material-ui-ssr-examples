let {
    AppBar,
    IconButton,
    NavigationClose,
    FlatButton,
    RaisedButton,
    FloatingActionButton,
    FontIcon
    } = MUI;

ButtonsPage = React.createClass({

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
                <h2>Flat Button</h2>
                <div>
                    <FlatButton label="Default" />
                    <FlatButton label="Primary" primary={true} />
                    <FlatButton label="Secondary" secondary={true} />
                </div>

                <h2>Raised Button</h2>
                <div>
                    <RaisedButton label="Default" /> &nbsp;
                    <RaisedButton label="Primary" primary={true} /> &nbsp;
                    <RaisedButton label="Secondary" secondary={true} /> &nbsp;
                </div>
                <h2>Floating Action Button</h2>

                <FloatingActionButton>
                    <FontIcon className="fa fa-star" />
                </FloatingActionButton>
                &nbsp;
                <FloatingActionButton secondary={true}>
                    <FontIcon className="fa fa-facebook" />
                </FloatingActionButton>
            </div>
        );

        return (
            <ContentWrapper>
                <Example demo={Demo} />
            </ContentWrapper>
        );
    }
});