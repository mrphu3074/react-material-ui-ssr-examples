let {
    Paper, Tabs, Tab
    } = MUI;

Example = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext: function () {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },
    render() {
        return (
            <Paper style={ styles.Example.container } >
                <div style={ {padding: "20px"} }>
                    {this.props.demo}
                </div>
            </Paper>
        );
    }
});