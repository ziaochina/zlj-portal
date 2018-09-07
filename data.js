export function getMeta() {
	return {
		name: 'root',
		component: 'Layout',
		className: 'zlj-portal',
		children: [{
			name: 'header',
			component: 'Layout',
			className: 'zlj-portal-header',
			children: [{
				name: 'left',
				component: 'Layout',
				className: "{{'zlj-portal-header-left zlj-portal-header-left-' + (data.isFoldMenu?'fold':'unfold') }}",
				children: [{
					name: 'logo',
					component: '::img',
					className: 'zlj-portal-header-left-logo',
					src: '{{$getConfig().logo}}'
				}, {
					name: 'siteName',
					component: '::h3',
					children: '{{$getConfig().websiteName}}',
					_visible: '{{!data.isFoldMenu}}',
				}]
			}, {
				name: 'center',
				component: 'Layout',
				className: "zlj-portal-header-center",
				children: [{
					name: 'foldMenu',
					component: 'Layout',
					className: "zlj-portal-header-center-foldMenu",
					_visible: false,
					children: [{
						name: 'foldMenu',
						component: 'Icon',
						type: `{{data.isFoldMenu ? 'double-right' :'double-left'}}`,
						title: '收起菜单',
						showStyle: 'showy',
						style: { fontSize: 19 },
						onClick: '{{$foldMenu}}'
					}]
				}, {
					name: 'tabs',
					component: 'Layout',
					className: "zlj-portal-header-center-tabs",
					children: {
						name: 'tabs',
						component: 'Tabs',
						type: 'card',
						type: "editable-card",
						hideAdd: true,
						activeKey: '{{data.content && data.content.name}}',
						onChange: '{{$tabChange}}',
						onEdit: '{{$tabEdit}}',
						_visible: '{{ data.isTabsStyle && data.openTabs && data.openTabs.length > 0}}',
						children: [{
							name: 'tab1',
							component: 'Tabs.TabPane',
							key: '{{data.openTabs[_rowIndex].name}}',
							tab: '{{data.openTabs[_rowIndex].name}}',
							_power: 'for in data.openTabs'
						}]
					}
				}]
			}, {
				name: 'right',
				component: 'Layout',
				className: "zlj-portal-header-right",
				children: [{
					name: 'search',
					component: 'Popover',
					placement: 'bottomRight',
					children: {
						name: 'search',
						component: 'Layout',
						className: "zlj-portal-header-right-search",
						children: {
							name: 'icon',
							component: 'Icon',
							type: 'search'
						},
					},
					content: {
						name: 'search',
						component: 'Input.Search'
					}
				}, {
					name: 'notice',
					component: 'Popover',
					placement: 'bottomRight',
					autoAdjustOverflow: true,
					overlayStyle: { width: 300 },
					children: {
						name: 'notice',
						component: 'Layout',
						className: "zlj-portal-header-right-search",
						children: {
							name: 'badge',
							component: 'Badge',
							count: 5,
							offset: [0, 2],
							children: {
								name: 'icon',
								component: 'Icon',
								size: 'large',
								type: 'bell'
							}
						},
					},
					content: {
						name: 'notice',
						component: 'AppLoader',
						appName: 'zlj-portal-notice'
					}
				}, {
					name: 'topMenu',
					component: 'Layout',
					className: "zlj-portal-header-right-topMenu",
					children: [{
						name: 'topMenu',
						component: 'Menu',
						className: "zlj-portal-header-right-topMenu",
						mode: 'horizontal',
						onClick: '{{$topMenuClick}}',
						selectedKeys: [],
						children: [{
							name: 'toggleTabs',
							component: 'Menu.Item',
							key: 'toggleTabs',
							_visible: false,
							children: [{
								name: 'icon',
								component: 'Icon',
								type: 'appstore-o'
							},
								"{{data.isTabsStyle ? '正常风格' : '多页签显示风格'}}"]
						}, {
							name: 'my',
							component: 'Menu.SubMenu',
							key: 'my',
							title: {
								name: 'myTitle',
								component: '::span',
								className: 'zlj-portal-header-right-my-title',
								children: [{
									name: 'photo',
									component: '::img',
									className: 'zlj-portal-header-right-photo',
									src: '{{$getPhoto()}}'
								}, "{{data.other.currentUser?data.other.currentUser.name:'13334445556'}}"]
							},
							children: [{
								name: 'mySetting',
								component: 'Menu.Item',
								key: 'mySetting',
								children: '个人设置'
							}, {
								name: 'logout',
								component: 'Menu.Item',
								key: 'logout',
								children: '注销'
							}]
						}]
					}]
				}]
			}]
		}, {
			name: 'content',
			component: 'Layout',
			className: 'zlj-portal-content',
			children: [{
				name: 'left',
				component: 'Layout',
				className: "{{'zlj-portal-content-left zlj-portal-content-left-' + (data.isFoldMenu?'fold':'unfold') }}",
				style: "{{({overflow:data.isFoldMenu?'visible':'auto'})}}",
				children: [{
					name: 'menu',
					component: 'Menu',
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
					name: 'foldMenu',
					component: 'Layout',
					className: 'zlj-portal-content-left-foldMenu',
					children: [{
						name: 'foldMenu',
						component: 'Icon',
						type: `{{data.isFoldMenu ? 'double-right' :'double-left'}}`,
						title: `{{data.isFoldMenu ? '展开菜单' :'收起菜单'}}`,
						showStyle: 'showy',
						style: { fontSize: 19 },
						onClick: '{{$foldMenu}}'
					}]
				}]
			}, {
				name: 'container',
				component: 'Layout',
				children: [{
					name: 'tabs',
					component: 'Tabs',
					className: 'zlj-portal-content-tabs',
					type: 'card',
					type: "editable-card",
					hideAdd: true,
					activeKey: '{{data.content && data.content.name}}',
					onChange: '{{$tabChange}}',
					onEdit: '{{$tabEdit}}',
					_visible: '{{ data.isTabsStyle && data.openTabs && data.openTabs.length > 0}}',
					_visible: false,
					children: [{
						name: 'tab1',
						component: 'Tabs.TabPane',
						key: '{{data.openTabs[_rowIndex].name}}',
						tab: '{{data.openTabs[_rowIndex].name}}',
						_power: 'for in data.openTabs'
					}]
				}, {
					name: 'main',
					component: 'Layout',
					className: 'zlj-portal-content-main',
					_visible: '{{!!(data.content && data.content.appName)}}',
					children: {
						name: 'main',
						component: 'Layout',
						children: {
							name: 'app',
							component: 'AppLoader',
							appName: '{{ data.openTabs && data.openTabs.length > 0 && data.openTabs[_rowIndex].appName }}',
							onPortalReload: '{{$load}}',
							setPortalContent: '{{$setContent}}',
							'...': '{{data.openTabs && data.openTabs.length > 0 && data.openTabs[_rowIndex].appProps}}',
							isTabStyle: '{{data.isTabsStyle}}',
							_notRender: '{{ !(data.content && data.content.name == data.openTabs[_rowIndex].name) }}',
							_power: 'for in data.openTabs',

						}
					}

				}]
			}]
		}]
	}
}

export function getInitState() {
	return {
		data: {
			menu: [],
			menuSelectedKeys: [],
			menuDefaultOpenKeys: [],
			content: {},
			openTabs: [],
			isTabsStyle: true,
			isFoldMenu: true,
			other: {}
		}
	}
}