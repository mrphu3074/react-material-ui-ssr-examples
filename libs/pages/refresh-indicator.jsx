let {
    AppBar,
    RefreshIndicator
    } = MUI;


RefreshIndicatorPage = React.createClass({

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
            <div style={{position: "relative"}}>
                <h2>Refresh Indicator</h2>


                <RefreshIndicator percentage={30} size={40} left={10} top={5} status="ready" style={ {position: "relative"} } />
                <br/>
                <RefreshIndicator percentage={60} size={40} left={10} top={5} status="ready" style={ {position: "relative"} } />
                <br/>
                <RefreshIndicator percentage={80} size={40} left={10} top={5} status="ready" style={ {position: "relative"} } />

                <br/>

                <RefreshIndicator size={40} left={80} top={5} status="loading" style={ {position: "relative"} } />
            </div>
        );

        return (
            <ContentWrapper>
                <Example demo={Demo} />
            </ContentWrapper>
        );
    }
});