let { TimePicker } = MUI;


TimePickerPage = React.createClass({

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
                <TimePicker
                    format="ampm"
                    hintText="12hr Format" />

                <TimePicker
                    format="24hr"
                    hintText="24hr Format" />
            </div>
        );

        return (
            <ContentWrapper>
                <Example demo={Demo} />
            </ContentWrapper>
        );
    }
});