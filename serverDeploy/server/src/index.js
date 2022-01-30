// imports
const app = require('./server')
const { config } = require('./config')

// port conenction test
app.listen(config.app.PORT, () =>
  console.log('Server running on port ' + config.app.PORT)
)
