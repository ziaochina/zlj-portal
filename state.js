const menu = [{
    key: '1',
    title: '首页',
    appName: 'zlj-home',
    appProps: {},
    icon: 'home',
    isDefault: true
},{
    key: '2',
    title: '看板',
    appName: 'zlj-home1',
    appProps: {},
    icon: 'home',
    isDefault: true
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