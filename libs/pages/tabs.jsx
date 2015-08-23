let { Tabs, Tab, FlatButton } = MUI;

TabsPage = React.createClass({

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
                <h2>Tabs</h2>
                <Tabs>
                    <Tab label="Item One" >
                        <div>
                            <h2>Tab One Template Example</h2>
                            <p>
                                This is an example of a tab template!
                            </p>
                            <p>
                                You can put any sort of HTML or react component in here.
                            </p>
                        </div>
                    </Tab>
                    <Tab label="Item Two" >
                        <div>
                            <h2>Tab Two Template Example</h2>
                            <p>
                                This is another example of a tab template!
                            </p>
                            <p>
                                Fair warning - the next tab routes to home!
                            </p>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        );

        return (
            <ContentWrapper>
                <Example demo={Demo} />
            </ContentWrapper>
        );
    }
});