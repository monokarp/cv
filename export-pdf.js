const puppeteer = require('puppeteer');
const { spawn } = require('child_process');

function runDevServer() {
  const child = spawn('npm', ['run', 'dev'], { detached: true });

  return new Promise((res, rej) => {
    child.stdout.on('data', (data) => {

      console.log('child data', data.toString());

      if (data.includes('Ready')) {
        res(() => {
          child.removeAllListeners('data');
          return process.kill(-child.pid, 'SIGINT');
        });
      }
    });

    child.stderr.on('data', (data) => {
      const errorStr = data.toString();

      console.log('child error', errorStr);

      rej(errorStr);
    });
  });
}

async function run() {
  const killServer = await runDevServer();

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  await page.goto('http://localhost:3000', { waitUntil: ['networkidle0', 'load'] })

  await page.pdf({
    format: 'A2',
    scale: 1.15,
    printBackground: false,
    path: './out/oleg-bondarenko-cv.pdf'
  });

  await browser.close();

  if (killServer()) {
    console.log('server terminated');
  }
}

run();