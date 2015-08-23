let {
    Avatar,
    FontIcon,
    IconButton,
    List,
    ListItem
    } = MUI;

AvatarsPage = React.createClass({

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
            <List>
                <ListItem
                    leftAvatar={<Avatar src={faker.image.avatar()} />}
                    primaryText={faker.name.findName()}
                    secondaryText={faker.lorem.sentence()}/>
                <ListItem
                    leftAvatar={<Avatar src={faker.image.avatar()} />}
                    primaryText={faker.name.findName()}
                    secondaryText={faker.lorem.sentence()}/>
                <ListItem
                    leftAvatar={<Avatar src={faker.image.avatar()} />}
                    primaryText={faker.name.findName()}
                    secondaryText={faker.lorem.sentence()}/>
                <ListItem
                    leftAvatar={<Avatar src={faker.image.avatar()} />}
                    primaryText={faker.name.findName()}
                    secondaryText={faker.lorem.sentence()}/>
                <ListItem
                    leftAvatar={<Avatar src={faker.image.avatar()} />}
                    primaryText={faker.name.findName()}
                    secondaryText={faker.lorem.sentence()}/>
                <ListItem
                    leftAvatar={<Avatar src={faker.image.avatar()} />}
                    primaryText={faker.name.findName()}
                    secondaryText={faker.lorem.sentence()}/>
                <ListItem
                    leftAvatar={<Avatar src={faker.image.avatar()} />}
                    primaryText={faker.name.findName()}
                    secondaryText={faker.lorem.sentence()}/>
                <ListItem
                    leftAvatar={<Avatar src={faker.image.avatar()} />}
                    primaryText={faker.name.findName()}
                    secondaryText={faker.lorem.sentence()}/>
                <ListItem
                    leftAvatar={<Avatar src={faker.image.avatar()} />}
                    primaryText={faker.name.findName()}
                    secondaryText={faker.lorem.sentence()}/>
                <ListItem
                    leftAvatar={<Avatar src={faker.image.avatar()} />}
                    primaryText={faker.name.findName()}
                    secondaryText={faker.lorem.sentence()}/>
            </List>
        );

        return (
            <ContentWrapper>
                <Example demo={Demo} />
            </ContentWrapper>
        );
    }
});