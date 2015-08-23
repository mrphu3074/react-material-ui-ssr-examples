ContentWrapper = React.createClass({
    render() {
        return (
            <div style={ styles.contentWrapper }>
                {this.props.children}
            </div>
        );
    }
});