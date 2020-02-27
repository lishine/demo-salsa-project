const { PrismaCredential } = require('canner-credential')

module.exports = {
	env: {
		default: [new PrismaCredential('prisma/prisma.yml')],
	},
	navbarTheme: 'dark',
	sidebarTheme: 'light',
	sidebarMenuStyle: {
		height: '100%',
	},
	sidebarMenu: [
		{
			title: 'More schemas',
			pathname: '__toCMS30',
			href: 'https://cms30.canner.io/',
			icon: 'left',
		},
		{
			title: 'Header',
			pathname: 'header',
		},
		{
			title: 'Intro',
			pathname: 'intro',
		},
		{
			title: 'Work',
			pathname: 'work',
		},
		{
			title: 'About',
			pathname: 'about',
		},
		{
			title: 'Contact',
			pathname: 'contact',
		},
	],
	theme: {
		'primary-color': '#337ab7',
		'btn-primary-bg': '#337ab7',
		'progress-default-color': '#158ebd',
		// navbar
		'layout-header-background': '#4b4949',
		'menu-dark-bg': '#4b4949',
		'menu-dark-item-selected-bg': '#4b4949',
		'menu-dark-item-active-bg': '#4b4949',

		// sidebar
		'layout-sider-background-light': '#fdfdfd',
		'menu-bg': '#fdfdfd',
		'menu-item-selected-bg': '#f9f9f9',
		'menu-item-active-bg': '#f9f9f9',
		'layout-trigger-background': '#fdfdfd',
		'border-radius-base': '3px',

		// body
		'layout-body-background': '#fdfdfd',
	},
}
