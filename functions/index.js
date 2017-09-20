require('zone.js/dist/zone-node')

const functions = require('firebase-functions')
const compression = require('compression')
const bodyParser = require('body-parser')
const LRUCache = require('lru-cache')
const helmet = require('helmet')
const express = require('express')
const path = require('path')
const { enableProdMode } = require('@angular/core')
const { renderModuleFactory } = require('@angular/platform-server')

const { AppServerModuleNgFactory } = require('./dist-ssr/main.bundle')

enableProdMode()

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1hour
})

function getCacheKey (req) {
  return `${req.url}`
}

const index = require('fs')
  .readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf8')
  .toString()

let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(compression())
app.use(helmet())

app.get('**', function (req, res) {
  const key = getCacheKey(req)

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    // console.log(`CACHE HIT: ${key}`)
    res.send(ssrCache.get(key))
    return
  }
  renderModuleFactory(AppServerModuleNgFactory, {
    url: req.path,
    document: index
  }).then(html => {
    // Let's cache this page
    // console.log(`CACHE MISS: ${key}`)
    ssrCache.set(key, html)
    res.status(200).send(html)
  })
})

exports.ssr = functions.https.onRequest(app)
