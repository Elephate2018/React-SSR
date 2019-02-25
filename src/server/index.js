import express from 'express'
import cors from 'cors'
import { renderToString } from 'react-dom/server'
import App from '../shared/App.js'
import React from 'react'
import serialize from 'serialize-javascript'
import { matchPath, StaticRouter } from 'react-router-dom'
import routes from '../shared/routes'

const app = express()

app.use(cors())
app.use(express.static('public'))
app.get('*', (req, res, next) => {

  const markup = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <App />
    </StaticRouter>
    )
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SSR News Api</title>
          <script src='/bundle.js' defer></script>
        </head>
        <body>
          <div id='app'>${markup}</div>
        </body>
      </html>
    `)
})

app.get('/:news/:title', (req, res) => {

})

app.listen(3000, () => {
  console.log('Server is listening on port: 3000')
})
