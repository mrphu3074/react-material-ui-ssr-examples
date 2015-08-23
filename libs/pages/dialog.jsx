let {
    AppBar,
    IconButton,
    Dialog,
    RaisedButton
    } = MUI;

DialogPage = React.createClass({

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext: function () {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    render() {
        let standardActions = [
            { text: 'Cancel' },
            { text: 'Submit', onTouchTap: this._onDialogSubmit, ref: 'submit' }
        ];

        var Demo = (
            <div>
                <h2>Dialogs</h2>
                <Dialog
                    ref="dialog1"
                    title="Dialog With Standard Actions"
                    actions={standardActions}
                    actionFocus="submit"
                    modal={true}>
                    The actions in this window are created from the json that's passed in.
                </Dialog>

                <RaisedButton label="Show dialog" onTouchTap={()=> this.refs.dialog1.show()} />

            </div>
        );

        return (
            <ContentWrapper>
                <Example demo={Demo} />
            </ContentWrapper>
        );
    }
});