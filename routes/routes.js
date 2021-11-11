const projectsRouter = require('./projects.routes')

const Routes = (app) =>{

    app.use('/api/projects', projectsRouter);

}

module.exports = Routes;