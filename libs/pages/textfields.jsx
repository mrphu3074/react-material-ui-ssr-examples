let { TextField } = MUI;

TextFieldsPage = React.createClass({

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
                <h2>Textfields</h2>

                <TextField
                    hintText="Hint Text"
                    defaultValue="Default Value" />

                <TextField
                    hintText="Hint Text"
                    floatingLabelText="Floating Label Text" />

                <TextField
                    hintText="Hint Text"
                    defaultValue="Default Value"
                    floatingLabelText="Floating Label Text" />

                <TextField
                    hintText="Hint Text (MultiLine)"
                    multiLine={true} />
            </div>
        );

        return (
            <ContentWrapper>
                <Example demo={Demo} />
            </ContentWrapper>
        );
    }
});