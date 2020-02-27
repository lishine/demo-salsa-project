const {FirebaseCredential} = require("canner-credential");

export {
  env: {
    /* store data in memory first */
    "default": []

    /* See https://www.canner.io/docs/credential-firebase.html to learn how to get */
    // "default": [neww FirebaseCredential(require("path to cert.json"))],
    
    /* See https://www.canner.io/docs/credential-prisma.html to learn how to get prisma configuration files */
    // "default": [new PrismaCredential("path to yaml")],
    
    /* for PREMIUM plan, you can use more than one env */
    // "test": [new FirebaseCredential(require("path to cert.json"))]
  },
  navbarTheme: "dark",
  sidebarTheme: "light",
  sidebarMenuStyle: {
    height: '100%'
  },
  sidebarMenu: [{
    title: 'More schemas',
    pathname: '__toCMS30',
    href: 'https://cms30.canner.io/',
    icon: 'left'
  }, {
    title: 'Posts',
    pathname: 'posts'
  }, {
    title: 'Categories',
    pathname: 'categories'
  }],
  theme: {
    "primary-color": "#337ab7",
    "btn-primary-bg": "#337ab7",
    "progress-default-color": "#158ebd",
    // navbar
    "layout-header-background": "#4b4949",
    "menu-dark-bg": "#4b4949",
    "menu-dark-item-selected-bg": "#4b4949",
    "menu-dark-item-active-bg": "#4b4949",

    // sidebar
    "layout-sider-background-light": "#fdfdfd",
    "menu-bg": "#fdfdfd",
    "menu-item-selected-bg": "#f9f9f9",
    "menu-item-active-bg": "#f9f9f9",
    "layout-trigger-background": "#fdfdfd",
    "border-radius-base": "3px",

    // body
    "layout-body-background": "#fdfdfd"
  }
}
