// using events emit and on in http server to read data in chuncks and send imp. data first to make our http server faster.
// Giving example of a big file big.txt to send into browser efficiently.

var http = require('http')
var fs = require('fs')

// default size of a chunk is 64 KB, If we send file directly then it will forcefully braked into chunks of 64 kb.
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 }) // we can set default chunk size instead of 64000 bytes.
// And remaining buffer - remainder

http
  .createServer(function (req, res) {
    
  /*   we can send big file directly like below method but its not efficient.
    const text = fs.readFileSync('./content/big.txt', 'utf8')  // reading whole file at same time 
    res.end(text) 
     */

    // so we gonna use this method to send data in chuncks.
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')  // reading file in chunks.
    fileStream.on('open', () => {  //  open means chunks breaked 
      fileStream.pipe(res)  // send the chunk in response pipe.
    })
    fileStream.on('error', (err) => { // error means whole file completed or unable to break the file in chunks.
      res.end(err) // sending error occurence in response.
    })
  })
  .listen(5000)
