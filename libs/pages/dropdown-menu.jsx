let {
    AppBar,
    DropDownMenu
    } = MUI;

DropDownMenuPage = React.createClass({

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext: function () {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    render() {
        let menuItems = [
            { payload: '1', text: 'Never' },
            { payload: '2', text: 'Every Night' },
            { payload: '3', text: 'Weeknights' },
            { payload: '4', text: 'Weekends' },
            { payload: '5', text: 'Weekly' },
        ];


        var Demo = (
            <div>
                <h2>Dropdown menu</h2>

                <DropDownMenu menuItems={menuItems} />
            </div>
        );

        return (
            <ContentWrapper>
                <Example demo={Demo} />
            </ContentWrapper>
        );
    }
});