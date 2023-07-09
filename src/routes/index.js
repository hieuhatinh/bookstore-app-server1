import routerAuth from "./auth.js"

function routes(app) {
    app.use('/auth', routerAuth)
}

export default routes