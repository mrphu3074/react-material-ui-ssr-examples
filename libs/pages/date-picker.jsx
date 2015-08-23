let {
    AppBar,
    DatePicker
    } = MUI;

DatePickerPage = React.createClass({

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
                <h2>Date Picker</h2>
                <DatePicker
                    hintText="Portrait Dialog" />

                <DatePicker
                    hintText="Landscape Dialog"
                    mode="landscape"/>
            </div>
        );

        return (
            <ContentWrapper>
                <Example demo={Demo} />
            </ContentWrapper>
        );
    }
});