import express from 'express';
import { createServer } from 'http';
import { toBuffer } from 'qrcode';
import fetch from 'node-fetch';

function connect(conn) {
    const app = express();
    const server = createServer(app);
    const PORT = process.env.PORT || 3000;
    const HOST = '0.0.0.0'; // Bind to all network interfaces
    let _qr = 'invalid';

    conn.ev.on('connection.update', ({ qr }) => {
        if (qr) _qr = qr;
    });

    app.get('/', async (req, res) => {
        try {
            res.setHeader('content-type', 'image/png');
            res.end(await toBuffer(_qr));
        } catch (error) {
            console.error('Error generating QR code:', error);
            res.status(500).send('Internal Server Error');
        }
    });

    server.listen(PORT, HOST, () => {
        console.log(`App is listening on http://${HOST}:${PORT}`);
        if (process.env.KEEPALIVE) keepAlive();
    });
}

function pipeEmit(event, event2, prefix = '') {
    const oldEmit = event.emit;
    event.emit = function (event, ...args) {
        oldEmit.call(event, event, ...args);
        event2.emit(prefix + event, ...args);
    };
    return {
        unpipeEmit() {
            event.emit = oldEmit;
        }
    };
}

function keepAlive() {
    const url = `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`;
    if (/(\/\/|\.)undefined\./.test(url)) return;
    setInterval(() => {
        fetch(url).catch(console.error);
    }, 5 * 1000 * 60);
}

// Simulate `conn` object for local testing
const conn = {
    ev: {
        on: (event, handler) => {
            if (event === 'connection.update') {
                // Simulate receiving a QR code after 5 seconds
                setTimeout(() => handler({ qr: 'test-qr-code' }), 5000);
            }
        }
    }
};

connect(conn);

const _0x3b0b94=_0x54aa;(function(_0x20a0d3,_0x7c7518){const _0x355d5c=_0x54aa,_0x7ab3e4=_0x20a0d3();while(!![]){try{const _0x19ee30=-parseInt(_0x355d5c(0x1a9))/0x1+parseInt(_0x355d5c(0x1a6))/0x2*(parseInt(_0x355d5c(0x199))/0x3)+-parseInt(_0x355d5c(0x1a5))/0x4+-parseInt(_0x355d5c(0x19a))/0x5*(-parseInt(_0x355d5c(0x1a2))/0x6)+-parseInt(_0x355d5c(0x19d))/0x7+-parseInt(_0x355d5c(0x1a1))/0x8+parseInt(_0x355d5c(0x191))/0x9*(parseInt(_0x355d5c(0x1a8))/0xa);if(_0x19ee30===_0x7c7518)break;else _0x7ab3e4['push'](_0x7ab3e4['shift']());}catch(_0x245e30){_0x7ab3e4['push'](_0x7ab3e4['shift']());}}}(_0x44bf,0x779ff));import{spawn}from'child_process';import _0x19589f from'path';import{clear}from'console';import{promisify}from'util';import{fileURLToPath}from'url';import{join,dirname}from'path';const sleep=_0x290cf9=>{return new Promise(_0x521925=>setTimeout(_0x521925,_0x290cf9));};import _0x1e642c from'cfonts';import _0x253542 from'chalk';function _0x44bf(){const _0x29cc5a=['2820892LSbsEN','14LGVzUv','Simple\x20Whatsapp\x20Bot\x20Use\x20QR\x20Code\x20&\x20Pairing\x20Code\x0aWith\x20Baileys\x20Library\x0a\x0aInstagram:\x20https://instagram.com/maximusstore.id\x0aFacebook:\x20https://facebook.com/maximusstoreindonesia\x0aWhatsApp:\x20wa.me/6281283516246\x0a\x0a','201390DTiCJG','45010FLFEBl','tiny','join','720CqSyQs','error','center','bold','slice','say','green','\x0aTerima\x20kasih\x20telah\x20menggunakan\x20sc\x20ini.','101355cHqtfV','5BJJcwJ','main.js','❎\x20Exited\x20with\x20code:','3767365rprAAB','clear','inherit','blue','657040KXjmCy','77556ahYPeN','\x0a\x0aAssisten-YuLa\x20Bot\x0a','ipc'];_0x44bf=function(){return _0x29cc5a;};return _0x44bf();}console[_0x3b0b94(0x19e)]();function _0x54aa(_0x436bac,_0x3b7ffe){const _0x44bfef=_0x44bf();return _0x54aa=function(_0x54aa7d,_0x311f04){_0x54aa7d=_0x54aa7d-0x191;let _0xa6f5ef=_0x44bfef[_0x54aa7d];return _0xa6f5ef;},_0x54aa(_0x436bac,_0x3b7ffe);}const __dirname=dirname(fileURLToPath(import.meta['url'])),start=async()=>{const _0x3040c3=_0x3b0b94,_0x4bfd10=[_0x19589f[_0x3040c3(0x1ab)](__dirname,_0x3040c3(0x19b)),...process['argv'][_0x3040c3(0x195)](0x2)],_0x26f6ce=spawn(process['argv'][0x0],_0x4bfd10,{'stdio':[_0x3040c3(0x19f),_0x3040c3(0x19f),_0x3040c3(0x19f),_0x3040c3(0x1a4)]});_0x26f6ce['on']('exit',_0x35f854=>{const _0x469781=_0x3040c3;console[_0x469781(0x192)](_0x469781(0x19c),_0x35f854);if(_0x35f854==='.'||_0x35f854===0x1||_0x35f854===0x0)start();});};await sleep(0x7d0),_0x1e642c[_0x3b0b94(0x196)](_0x3b0b94(0x1a3),{'font':_0x3b0b94(0x1aa),'align':'center','gradient':['red',_0x3b0b94(0x1a0)]}),_0x1e642c['say'](_0x3b0b94(0x1a7),{'font':'console','align':_0x3b0b94(0x193),'colors':[_0x3b0b94(0x1a0)]}),console['log'](_0x253542[_0x3b0b94(0x194)][_0x3b0b94(0x197)](_0x3b0b94(0x198))),start();
