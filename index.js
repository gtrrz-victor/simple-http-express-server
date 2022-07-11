import express from 'express'
const app = express()
const port = 3000

app.get('/health', (_, res) => {
    res.send()
})

app.get('/break', (_, res) => {
    res.send()
    server.close()
})

const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
