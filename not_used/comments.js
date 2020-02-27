
// export const LoginLink = wrapMenu(_LoginLink)

    // const route = useStore(state => state.router.route)
    // const routeText = toCapitalizedWords(route).toUpperCase()

// const useToggle = _state => {
//     const [state, setState] = useState(_state)
//     const toggleState = () => setState(!state)
//     return [state, toggleState, setState]
// }

// const useMenu = (component, _state = false) => {
//     const [state, toggleState, setState] = useToggle(false)
//     component.handleClickOutside = () => setState(_state)
//     return [state, toggleState, setState]
// }

// const wrapMenu = component =>
//     onClickOutside(component, {
//         handleClickOutside: () => component.handleClickOutside,
//         preventDefault: true,
//         stopPropagation: true,
//     })


// const boxExtraBlackList = boxExtraParams.map(fn => Object.entries(fn.propTypes)[0][0])
// const textExtraBlackList = textExtraParams.map(fn => Object.entries(fn.propTypes)[0][0])

// const styledSystemBlacklist = () => {
//     const allPropTypes = Object.keys(styles)
//         .filter(key => typeof styles[key] === 'function')
//         .reduce((a, key) => Object.assign(a, styles[key].propTypes), {})

//     return [...Object.keys(allPropTypes), 'theme']
// }

// const blacklist = [
//     ...styledSystemBlacklist(),
//     ...boxExtraBlackList,
//     ...textExtraBlackList,
// ]

// export const boxCss = props => [...boxParams, ...textParams].map(func => func(props))
// export const mediaBoxCss = (media, props) =>
//     [...boxParams, ...textParams].map(func => ({
//         [media({ theme })]: func({ theme, ...props }),
//     }))



// const getFormPath = state => () => state.router.query.form
// const getForm = state => () => upperFirst(camelCase(state.router.query.form))
// const getLinkToken = state => () => state.router.query.token
// const getLinkType = state => () => state.router.query.link

// export const selectors = memoize(state => {
// 	return {
// 		getFormPath(state),
// 		getForm,
// 		getLinkToken,
// 		getLinkType,
// 	}
// })

// import memoize from 'memoize-state'
// export const getForm = () => memoize(state => upperFirst(camelCase(state.router.query.form)))
// export const useForm = () => useStore(getForm())

// export const selectors = Object.entries({
// 	getFormPath: state => () => state.router.query.form,
// 	getForm: mem(state => () => {
// 		console.log('--------CALCULATING')
// 		return upperFirst(camelCase(state.router.query.form))
// 	}),
// 	getLinkToken: state => () => state.router.query.token,
// 	getLinkType: state => () => state.router.query.link,
// }).reduce((acc, [name, fn]) => Object.assign(acc, { [name]: fn }), {})

// export const useForm = () => useStore(selectors.getForm)

			{/* <Space x="8px" className="d-none d-lg-block bg-primary" /> */}

// const Background = styled.div`
// 	background-color: #000000;
// 	background-repeat: no-repeat;

// 	background-image: ${lg.s1[0]}, ${lg.s2[0]},
// 		url('/static/img/hero/hero-smiling-girl-sm.jpg');
// 	background-size: ${lg.s1[1]}, ${lg.s2[1]}, auto auto;
// 	background-position: ${lg.s1[2]}, ${lg.s2[2]}, left top;

// 	@media (max-width: ${props => props.theme.media.sm}) {
// 		padding-bottom: 50px;
// 	}

// 	@media (min-width: ${props => props.theme.media.sm}) {
// 		min-height: 656px;
// 	}

// 	@media (max-width: ${props => props.theme.media.md}) {
// 		.hero-1,
// 		.text {
// 			max-width: 500px;
// 		}
// 	}

// 	@media (min-width: ${props => props.theme.media.md}) {
// 		min-height: 696px;
// 		background-image: ${lg.s1[0]}, ${lg.s2[0]},
// 			url('/static/img/hero/hero-smiling-girl-md.jpg');
// 		background-position: ${lg.s1[2]}, ${lg.s2[2]}, right top;
// 	}

// 	@media (min-width: ${props => props.theme.media.lg}) {
// 		background-image: ${lg.col[0]}, ${lg.s1[0]}, ${lg.s2[0]},
// 			url('/static/img/hero/hero-smiling-girl-lg.jpg');
// 		background-size: ${lg.col[1]}, ${lg.s1[1]}, ${lg.s2[1]}, auto auto;
// 		background-position: ${lg.col[2]}, ${lg.s1[2]}, ${lg.s2[2]}, center top;
// 	}

// 	@media (min-width: ${props => props.theme.media.xl}) {
// 		background-position: ${lg.col[2]}, ${lg.s1[2]}, ${lg.s2[2]}, right top;
// 		max-width: 1920px;
// 	}
// `


//  <h1 className="hero-1">hero-1</h1>
// <h2 className="hero-2">hero-2</h2>
// <h1>h1</h1>
// <h2>h2</h2>
// <h3>h3</h3>
// <h4>h4</h4>

/* const ButtonsArea = styled.div`
	display: grid;
	grid-template-columns: 160px 160px;
	grid-template-rows: auto;
	grid-column-gap: 8px;
	grid-row-gap: 15px;
	grid-template-areas:
		'btn-primary btn-secondary'
		'price price'
		'promo promo';
	.btn-primary {
		grid-aria: btn-primary;
	}
	.btn-secondary {
		grid-aria: btn-secondary;
	}
	.price {
		grid-aria: price;
	}	
	.promo {
		grid-aria: promo;
	}
	 @media (max-width: ${props => props.theme.media.md}) { 
		max-width: 160px; 
	 } 
	` */


				{/* <Global
					styles={css`
						/* #__next {
							margin: auto;
						} */
						`}
					/> */}
	
// const convertTokenExpireToMS = expire => {
// 	const [days, hours, minutes, seconds] = expire
// 		.match(/^(\d\d)d:(\d\d)h:(\d\d)m:(\d\d)s/)
// 		.slice(1)
// 	return 1000 * (seconds * 1 + 60 * (minutes * 1 + 60 * (hours * 1 + 24 * days * 1)))
// }

// import rimraf from 'rimraf'
// dot.templateSettings = {
// 	evaluate: /\[\[([\s\S]+?)\]\]/g,
// 	interpolate: /\[\[=([\s\S]+?)\]\]/g,
// 	encode: /\[\[!([\s\S]+?)\]\]/g,
// 	use: /\[\[#([\s\S]+?)\]\]/g,
// 	define: /\[\[##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\]\]/g,
// 	conditional: /\[\[\?(\?)?\s*([\s\S]*?)\s*\]\]/g,
// 	iterate: /\[\[~\s*(?:\]\]|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\]\])/g,
// 	varname: 'it',
// 	strip: true,
// 	append: false,
// 	selfcontained: false,
// }
// dot.process({ path: `${out_dir}` })
// rimraf.sync(`${out_dir}/*.jst`)
// fs.writeFileSync(`${out_dir}/${name}.jst`, )


// 	[
// 	['/api/auth/signUp', require('./routes/test')]
// 	['/api/auth/signIn', require('./routes/test')]
// 	['/api/auth/registerConfirm', require('./routes/test')]
// 	['/api/auth/newPassword', require('./routes/test')]
// 	['/api/auth/forgotPassword', require('./routes/test')]
// ])

// const server = micro(postRouter([['/api/general/*', require('./routes/general/general-router')]]))

// module.exports.postRouter = (routes, wrap) => {
// 	console.log('routes wrap?', routes, wrap)
// 	let ar = []
// 	for (const [path, route] of routes) {
// 		ar.push(post(path, wrap ? wrapService(route) : route))
// 	}
// 	return router()(...ar, post('/*', notfound))
// }

// require('app-module-path').addPath(__dirname)
// process.env.NODE_PATH = __dirname
// require('module').Module._initPaths()
// global.rootRequire = name => require(`${__dirname}/${name}`)

// require('app-module-path').addPath(__dirname)

// const path = require('path')
// const micro = require('micro')
// const match = require('fs-router')(path.join(__dirname, 'routes'))

// const server = micro(async (req, res) => {
// 	const matched = match(req)
// 	console.log('req.url', req.url)
// 	console.log('path.join(__dirname, "routes"', path.join(__dirname, 'routes'))
// 	if (matched) {
// 		return await matched(req, res)
// 	}
// 	micro.send(res, 404, { error: 'Route not found' })
// })

// const PORT = 8080
// server.listen(PORT)
// console.log('Listening on port', PORT)

// require('app-module-path').addPath(__dirname)
// const express = require('express')
// const camelCase = require('lodash/fp/camelCase')

// const app = express()

// app.post('/api/:dir/:name', async (req, res, next) => {
// 	const dir = camelCase(req.params.dir)
// 	const name = camelCase(req.params.name)
// 	console.log('name', name)
// 	console.log('dir', dir)
// 	require(`./api/${dir}/${name}`)(req, res)
// })

// const PORT = 8080
// app.listen(8080, () => console.log('Listening on port', PORT))
