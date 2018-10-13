export default {
    component: 'div',
    className: 'zlj-portal',
    children: [{
        component: 'div',
        className: 'zlj-portal-header',
        children: [{
            component: 'div',
            className: "{{'zlj-portal-header-left zlj-portal-header-left-' + (data.isFoldMenu?'fold':'unfold') }}",
            children: [{
                component: 'img',
                className: 'zlj-portal-header-left-logo',
                src: 'logo.png'
            }, {
                component: 'span',
                className: 'zlj-portal-header-left-caption',
                children: '某某系统',
                _visible: '{{!data.isFoldMenu}}',
            }]
        }, {
            component: 'div',
            className: "zlj-portal-header-center",

        }, {
            component: 'div',
            className: "zlj-portal-header-right",
            children: [{
                component: 'antd.Popover',
                placement: 'bottomRight',
                children: {
                    component: 'div',
                    className: "zlj-portal-header-right-search",
                    children: {
                        component: 'antd.Icon',
                        type: 'search'
                    },
                },
                content: {
                    component: 'antd.Input.Search'
                }
            }, {
                component: 'antd.Popover',
                placement: 'bottomRight',
                autoAdjustOverflow: true,
                overlayStyle: { width: 300 },
                children: {
                    component: 'div',
                    className: "zlj-portal-header-right-search",
                    children: {
                        component: 'antd.Badge',
                        count: 5,
                        offset: [0, 2],
                        children: {
                            component: 'antd.Icon',
                            size: 'large',
                            type: 'bell'
                        }
                    },
                },
                content: {
                    component: 'AppLoader',
                    appName: 'zlj-portal-notice'
                }
            }, {
                component: 'div',
                className: "zlj-portal-header-right-topMenu",
                children: [{
                    component: 'antd.Menu',
                    className: "zlj-portal-header-right-topMenu",
                    mode: 'horizontal',
                    onClick: '{{$topMenuClick}}',
                    selectedKeys: [],
                    children: [{
                        component: 'antd.Menu.Item',
                        key: 'toggleTabs',
                        _visible: false,
                        children: [{
                            component: 'antd.Icon',
                            type: 'appstore-o'
                        },
                            "{{data.isTabsStyle ? '正常风格' : '多页签显示风格'}}"]
                    }, {
                        component: 'antd.Menu.SubMenu',
                        key: 'my',
                        title: {
                            component: 'span',
                            className: 'zlj-portal-header-right-my-title',
                            children: [{
                                component: 'img',
                                className: 'zlj-portal-header-right-photo',
                                src: 'photo.png'
                            }, "{{data.other.currentUser?data.other.currentUser.name:'13334445556'}}"]
                        },
                        children: [{
                            component: 'antd.Menu.Item',
                            key: 'mySetting',
                            children: '个人设置'
                        }, {
                            component: 'antd.Menu.Item',
                            key: 'logout',
                            children: '注销'
                        }]
                    }]
                }]
            }]
        }]
    }, {
        component: 'div',
        className: 'zlj-portal-content',
        children: [{
            component: 'div',
            className: "{{'zlj-portal-content-left zlj-portal-content-left-' + (data.isFoldMenu?'fold':'unfold') }}",
            style: "{{({overflow:data.isFoldMenu?'visible':'auto'})}}",
            children: [{
                component: 'antd.Menu',
                mode: 'vertical',
                theme: 'dark',
                className: 'zlj-portal-content-left-menu',
                inlineCollapsed: '{{data.isFoldMenu}}',
                selectedKeys: "{{$getMenuSelectKeys()}}",
                defaultOpenKeys: "{{data.menuDefaultOpenKeys}}",
                onClick: '{{$menuClick}}',
                getPopupContainer: () => { return document.querySelector('.zlj-portal-content-left-menu') },
                children: '{{$getMenuChildren()}}'
            }, {
                component: 'div',
                className: 'zlj-portal-content-left-foldMenu',
                children: [{
                    component: 'antd.Icon',
                    type: `{{data.isFoldMenu ? 'double-right' :'double-left'}}`,
                    title: `{{data.isFoldMenu ? '展开菜单' :'收起菜单'}}`,
                    style: { fontSize: 19 },
                    onClick: '{{$foldMenu}}'
                }]
            }]
        }, {
            component: 'div',
            className: 'zlj-portal-content-main',
            _visible: '{{!!(data.content && data.content.appName)}}',
            children: [{
                component: 'div',
                className: "zlj-portal-content-main-tabs",
                children: {
                    component: 'antd.Tabs',
                    type: "editable-card",
                    hideAdd: true,
                    activeKey: '{{data.content && data.content.appName}}',
                    onChange: '{{$tabChange}}',
                    onEdit: '{{$tabEdit}}',
                    children: [{
                        component: 'antd.Tabs.TabPane',
                        key: `{{data.openTabs[_rowIndex].appName}}`,
                        tab: '{{data.openTabs[_rowIndex].title}}',
                        _power: 'for in data.openTabs'
                    }],
                    _visible: '{{ data.isTabsStyle && data.openTabs && data.openTabs.length > 0}}',
                }
            }, {
                component: 'div',
                className: "zlj-portal-content-main-app",
                children: {
                    component: 'AppLoader',
                    appName: '{{ data.openTabs && data.openTabs.length > 0 && data.openTabs[_rowIndex].appName }}',
                    onPortalReload: '{{$load}}',
                    setPortalContent: '{{$setContent}}',
                    '...': '{{data.openTabs && data.openTabs.length > 0 && data.openTabs[_rowIndex].appProps}}',
                    isTabStyle: '{{data.isTabsStyle}}',
                    _notRender: '{{ !(data.content && data.content.appName == data.openTabs[_rowIndex].appName) }}',
                    _power: 'for in data.openTabs',
                }
            }]

        }]
    }]
}