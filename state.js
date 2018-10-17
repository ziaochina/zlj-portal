const menu = [{
    key: '1',
    title: 'Home',
    appName: 'zlj-home',
    appProps: {},
    icon: 'home',
    isDefault: true
},{
    key: '2',
    title: 'Board',
    appName: 'zlj-board',
    appProps: {},
    icon: 'dashboard'
}]

export default {
    data: {
        menu,
        menuSelectedKeys: [],
        menuDefaultOpenKeys: [],
        content: { },
        openTabs: [],
        isTabsStyle: true,
        isFoldMenu: true,
        other: {}
    }
}