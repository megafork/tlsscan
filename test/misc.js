var should = require('should')
var Tlsscan = require('../')

var host = 'google.com'

describe('check for vulnerabilites', function(){
  this.timeout(5000)
  var options = {}
  options.host = host
  var scanner = new Tlsscan(options)

  it('CRIME - compression support', function(done){
    var scan = scanner.run('is_supported_compression')
    scan.on('end', function(data){
      data.result.should.be.false
      done()
    })
  })

})