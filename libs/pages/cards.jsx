let {
    AppBar,
    IconButton,
    FontIcon,
    FlatButton,
    Card,
    Avatar,
    CardHeader,
    CardTitle,
    CardText,
    CardMedia,
    CardActions,
    } = MUI;

var Colors = MUI.Styles.Colors;

CardsPage = React.createClass({

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
            <div style={ {overflow: "auto", clear: "both"} }>
                {_.range(1,15).map(this.renderCard)}
            </div>
        );

        return (
            <ContentWrapper>
                <Example demo={Demo} />
            </ContentWrapper>
        );
    },

    renderCard(val, idx) {
        return (
            <Card style={ {width: "400px", float: "left", margin: "10px"} } key={idx}>
                <CardMedia overlay={<CardTitle title="Title" subtitle="Subtitle"/>}>
                    <img src="http://lorempixel.com/600/337/nature/"/>
                </CardMedia>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                    <FlatButton label="Read more" primary={true} style={ {marginRight: "50px"} } />
                    <IconButton tooltip="Like" tooltipPosition="top-center" >
                        <FontIcon className="fa fa-heart"  color={Colors.pink500} />
                    </IconButton>
                    <span>20</span>
                    <IconButton tooltip="Comment" tooltipPosition="top-center" >
                        <FontIcon className="fa fa-comments-o"  color={Colors.grey500} />
                    </IconButton>
                    <span>10</span>
                </CardActions>
            </Card>
        );
    }
});