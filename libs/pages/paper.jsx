let {
    AppBar,
    Paper
    } = MUI;

PaperPage = React.createClass({

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
                <h2>Paper</h2>
                <Paper zDepth={1} className="paper-example">
                    <p>zDepth=1</p>
                </Paper>
                <Paper zDepth={2} className="paper-example">
                    <p>zDepth=2</p>
                </Paper>
                <Paper zDepth={3} className="paper-example">
                    <p>zDepth=3</p>
                </Paper>
                <Paper zDepth={4} className="paper-example">
                    <p>zDepth=4</p>
                </Paper>
                <Paper zDepth={5} className="paper-example">
                    <p>zDepth=5</p>
                </Paper>

                <Paper zDepth={1} rounded={false} className="paper-example">
                    <p>rounded=false</p>
                </Paper>
                <Paper zDepth={2} rounded={false} className="paper-example">
                    <p>rounded=false</p>
                </Paper>
                <Paper zDepth={3} rounded={false} className="paper-example">
                    <p>rounded=false</p>
                </Paper>
                <Paper zDepth={4} rounded={false} className="paper-example">
                    <p>rounded=false</p>
                </Paper>
                <Paper zDepth={5} rounded={false} className="paper-example">
                    <p>rounded=false</p>
                </Paper>

                <Paper zDepth={1} circle={true} className="paper-example">
                    <p>circle=true</p>
                </Paper>
                <Paper zDepth={2} circle={true} className="paper-example">
                    <p>circle=true</p>
                </Paper>
                <Paper zDepth={3} circle={true} className="paper-example">
                    <p>circle=true</p>
                </Paper>
                <Paper zDepth={4} circle={true} className="paper-example">
                    <p>circle=true</p>
                </Paper>
                <Paper zDepth={5} circle={true} className="paper-example">
                    <p>circle=true</p>
                </Paper>
            </div>
        );

        return (
            <ContentWrapper>
                <Example demo={Demo} />
            </ContentWrapper>
        );
    }
});