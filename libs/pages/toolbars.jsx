let { DropDownMenu,Toolbar, ToolbarGroup, ToolbarSeparator, RaisedButton, FontIcon, ToolbarTitle, DropDownIcon} = MUI;


ToolbarsPage = React.createClass({

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext: function () {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    render() {
        let filterOptions = [
            { payload: '1', text: 'All Broadcasts' },
            { payload: '2', text: 'All Voice' },
            { payload: '3', text: 'All Text' },
            { payload: '4', text: 'Complete Voice' },
            { payload: '5', text: 'Complete Text' },
            { payload: '6', text: 'Active Voice' },
            { payload: '7', text: 'Active Text' },
        ];
        let iconMenuItems = [
            { payload: '1', text: 'Download' },
            { payload: '2', text: 'More Info' }
        ];

        var Demo = (
            <div>
                <h2>Toolbars</h2>
                <Toolbar>
                    <ToolbarGroup key={0} float="left">
                        <DropDownMenu menuItems={filterOptions} />
                    </ToolbarGroup>
                    <ToolbarGroup key={1} float="right">
                        <ToolbarTitle text="Options" />
                        <FontIcon className="mui-icon-sort" />
                        <DropDownIcon iconClassName="icon-navigation-expand-more" menuItems={iconMenuItems} />
                        <ToolbarSeparator/>
                        <RaisedButton label="Create Broadcast" primary={true} />
                    </ToolbarGroup>
                </Toolbar>
            </div>
        );

        return (
            <ContentWrapper>
                <Example demo={Demo} />
            </ContentWrapper>
        );
    }
});