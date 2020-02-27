/// ///  !!! WARNING
/// MUST ADD PAGE FOR EACH ROUTE
/// ///

const Router = require('nextjs-dynamic-routes')

const router = new Router()

const publicRoutes = [
    'home',
    'course',
    'blog-feed',
    'faq',
    'contact-us',
    'about',
    'policy',
    'terms',
    'thank-you',
    'change-password',
]

const isPublicRoute = route => publicRoutes.find(r => r === route)
const findPage = page => {
    if (page === '/') {
        return { name: 'home' }
    }
    return router.routes.find(r => r.page === page)
}
const isPublicPage = page => {
    const { name } = findPage(page) || {}
    console.log('page', page)
    console.log('name', name)
    console.log('isPublicRoute(name)', isPublicRoute(name))
    return name && isPublicRoute(name)
}

const getRoute = asPath => {
    const { page } = router.getMatchingRoute(asPath)
    const { name } = findPage(page) || {}
    return name
}

router
    .add({
        name: 'home',
        pattern: '/',
        page: '/index',
    })
    .add({
        name: 'about',
        pattern: '/about',
        page: '/about',
    })
    .add({
        name: 'terms',
        pattern: '/terms',
        page: '/terms',
    })
    .add({
        name: 'policy',
        pattern: '/privacy-policy',
        page: '/privacy-policy',
    })
    .add({
        name: 'blog-feed',
        pattern: '/blog',
        page: '/blog',
    })
    .add({
        name: 'blog-post',
        pattern: '/blog/:id',
        page: '/blog',
    })
    .add({
        name: 'course',
        pattern: '/course',
        page: '/course',
    })
    .add({
        name: 'contact-us',
        pattern: '/contact-us',
        page: '/contact-us',
    })
    .add({
        name: 'faq',
        pattern: '/faq',
        page: '/faq',
    })
    .add({
        name: 'my-course',
        pattern: '/my-course/:pageId?',
        page: '/my-course',
    })
    .add({
        name: 'my-profile',
        pattern: '/my-profile',
        page: '/my-profile',
    })
    .add({
        name: 'change-password',
        pattern: '/login/change-password/:token',
        page: '/login/change-password',
    })
module.exports = { router, isPublicRoute, isPublicPage, findPage, getRoute }
