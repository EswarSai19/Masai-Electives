var QRCode = require('qrcode')

const { Command } = require('commander');
var program = new Command();
program.version('0.0.1')

program
.argument('<qrtext>',"qr text details")
.argument('<pngtext>',"png details")
.action((qrtext,pngtext)=>{
    QRCode.toString(qrtext,{type:'terminal'}, function (err, url) {
        console.log(url)
      })
})
.option('-o, --output', 'Give me output')




program.parse(process.argv)


