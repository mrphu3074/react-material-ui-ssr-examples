let {
    Slider
    } = MUI;


SlidersPage = React.createClass({

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
                <h2>Sliders</h2>

                <div>
                    <MUI.Slider name="slide12334" defaultValue={2} step={1} min={1} max={10} />
                </div>
            </div>
        );

        return (
            <ContentWrapper>
                <Example demo={Demo} />
            </ContentWrapper>
        );
    }
});