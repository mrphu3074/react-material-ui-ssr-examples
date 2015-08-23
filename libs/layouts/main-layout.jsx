let {
    AppCanvas,
    AppBar,
    } = MUI;

MainLayout = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext: function() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    render() {
        return (
            <AppCanvas>
                <AppBar
                    title="Material ui for Meteor"
                    iconClassNameRight="fa fa-github"
                    onLeftIconButtonTouchTap={()=>this.refs.leftNav.toggle() }
                    style={ styles.AppBar }
                    />

                <Navigation ref="leftNav" />
                {this.props.content}
            </AppCanvas>
        );
    }
});
