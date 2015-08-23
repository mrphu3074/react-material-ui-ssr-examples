let { Snackbar, FlatButton } = MUI;


SnackbarPage = React.createClass({

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
                <h2>Snackbar</h2>
                <FlatButton label="Show" onTouchTap={() => this.refs.snack.show()} />
                <Snackbar
                    ref="snack"
                    message="Event added to your calendar"
                    action="undo" />
            </div>
        );

        return (
            <ContentWrapper>
                <Example demo={Demo} />
            </ContentWrapper>
        );
    }
});