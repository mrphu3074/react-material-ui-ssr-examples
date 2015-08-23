let { Checkbox } = MUI;


SwitchesPage = React.createClass({

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
                <h2>Switches</h2>

                <Checkbox
                    name="checkboxName1"
                    value="checkboxValue1"
                    label="went for a run today"/>

                <Checkbox
                    name="checkboxName2"
                    value="checkboxValue2"
                    label="fed the dog"
                    defaultChecked={true}/>

                <Checkbox
                    name="checkboxName3"
                    value="checkboxValue3"
                    label="built a house on the moon"
                    disabled={true}/>
            </div>
        );

        return (
            <ContentWrapper>
                <Example demo={Demo} />
            </ContentWrapper>
        );
    }
});