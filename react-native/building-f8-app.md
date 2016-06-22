## Design

Storage: Parse server
Redux: Data layer (client side)

## Smaller components
re-use as much code as possiblea

`F8StyleSheet.create`

```js
export function create(styles: Object): {[name: string]: number} {
  const platformStyles = {};
  Object.keys(styles).forEach((name) => {
    let {ios, android, ...style} = {...styles[name]};
    if (ios && Platform.OS === 'ios') {
      style = {...style, ...ios};
    }
    if (android && Platform.OS === 'android') {
      style = {...style, ...android};
    }
    platformStyles[name] = style;
  });
  return StyleSheet.create(platformStyles);
}
```

- props
  - immutable
- state
  - change overtime

## Platform difference

[Platform specific extensions](http://facebook.github.io/react-native/docs/platform-specific-code.html#platform-specific-extensions)
- Top-level menu
  - iOS: fixed tabs
  - hamburger-type menu with a slide out nav


#### `DrawerLayoutAndroid` vs `<TabBarItem>`
```js
/* from js/tabs/F8TabsView.android.js */
render() {
  return (
    <DrawerLayoutAndroid
      ref="drawer"
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={this.renderNavigationView}>
      <View style={styles.content} key={this.props.activeTab}>
        {this.renderContent()}
      </View>
    </DrawerLayoutAndroid>
  );
}
```

```js
/* from js/tabs/F8TabsView.ios.js */
render() {
  var scheduleIcon = this.props.day === 1
    ? require('./schedule/img/schedule-icon-1.png')
    : require('./schedule/img/schedule-icon-2.png');
  var scheduleIconSelected = this.props.day === 1
    ? require('./schedule/img/schedule-icon-1-active.png')
    : require('./schedule/img/schedule-icon-2-active.png');
  return (
    <TabBarIOS tintColor={F8Colors.darkText}>
      <TabBarItemIOS
        title="Schedule"
        selected={this.props.activeTab === 'schedule'}
        onPress={this.onTabSelect.bind(this, 'schedule')}
        icon={scheduleIcon}
        selectedIcon={scheduleIconSelected}>
        <GeneralScheduleView
          navigator={this.props.navigator}
          onDayChange={this.handleDayChange}
        />
      </TabBarItemIOS>
      <TabBarItemIOS
        title="My F8"
        selected={this.props.activeTab === 'my-schedule'}
        onPress={this.onTabSelect.bind(this, 'my-schedule')}
        icon={require('./schedule/img/my-schedule-icon.png')}
        selectedIcon={require('./schedule/img/my-schedule-icon-active.png')}>
        <MyScheduleView
          navigator={this.props.navigator}
          onJumpToSchedule={() => this.props.onTabSelect('schedule')}
        />
      </TabBarItemIOS>
      <TabBarItemIOS
        title="Map"
        selected={this.props.activeTab === 'map'}
        onPress={this.onTabSelect.bind(this, 'map')}
        icon={require('./maps/img/maps-icon.png')}
        selectedIcon={require('./maps/img/maps-icon-active.png')}>
        <F8MapView />
      </TabBarItemIOS>
      <TabBarItemIOS
        title="Notifications"
        selected={this.props.activeTab === 'notifications'}
        onPress={this.onTabSelect.bind(this, 'notifications')}
        badge={this.state.notificationsBadge}
        icon={require('./notifications/img/notifications-icon.png')}
        selectedIcon={require('./notifications/img/notifications-icon-active.png')}>
        <F8NotificationsView navigator={this.props.navigator} />
      </TabBarItemIOS>
      <TabBarItemIOS
        title="Info"
        selected={this.props.activeTab === 'info'}
        onPress={this.onTabSelect.bind(this, 'info')}
        icon={require('./info/img/info-icon.png')}
        selectedIcon={require('./info/img/info-icon-active.png')}>
        <F8InfoView navigator={this.props.navigator} />
      </TabBarItemIOS>
    </TabBarIOS>
  );
}
```

#### Playground Component
```js
/* from js/setup.js */
class Playground extends React.Component {
  constructor(props) {
    super(props);
    const content = [];
    const define = (name: string, render: Function) => {
      content.push(<Example key={name} render={render} />);
    };

    var AddToScheduleButton = require('./tabs/schedule/AddToScheduleButton');
    AddToScheduleButton.__cards__(define);
    this.state = {content};
  }

  render() {
    return (
      <View style=>
        {this.state.content}
      </View>
    );
  }
}
```

## [Data](http://makeitopen.com/tutorials/building-the-f8-app/data/)
- flux
- redux
- Redux Persist
- Middleware (extra logic between action being dispatched and it reaches the reducer)

## Debugging
we’re triggering extra debugging functionality by using a global variable called __DEV__
