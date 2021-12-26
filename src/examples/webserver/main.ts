import {createServer, RequestListener, ServerResponse, IncomingMessage} from "http"

const handler : RequestListener = (req: IncomingMessage, res: ServerResponse) => {
  console.log(`${Date.now().toString()} - ${req.method}`)
  res.writeHead(200, {'Content-Type':'application/json'})
  res.write(JSON.stringify({status: 'Up and Running'}))
  res.end()
}

const server = createServer(handler)
server.listen(3000, () => {
  console.log("server start on http://localhost:3000")
})
