let {
    AppBar,
    Paper,
    LinearProgress,
    CircularProgress
    } = MUI;

ProgressPage = React.createClass({

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
                <h2>Progress</h2>
                <LinearProgress mode="determinate" value={60} />
                <br/>
                <LinearProgress mode="indeterminate"  />
                <br/>

                <CircularProgress mode="determinate" value={60} />
                <CircularProgress mode="determinate" value={60} size={1.5} />
                <CircularProgress mode="determinate" value={60} size={2} />
                <CircularProgress mode="indeterminate" />
                <CircularProgress mode="indeterminate" size={1.5} />
                <CircularProgress mode="indeterminate" size={2} />
            </div>
        );

        return (
            <ContentWrapper>
                <Example demo={Demo} />
            </ContentWrapper>
        );
    }
});