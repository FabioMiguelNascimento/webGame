const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const { spawn } = require('child_process');

// Tarefa para iniciar o backend com nodemon
gulp.task('start-backend', function (cb) {
  let started = false;

  return nodemon({
    script: 'server.js',
    watch: ['server.js']
  }).on('start', function () {
    if (!started) {
      cb();
      started = true;
    }
  });
});

// Tarefa para iniciar o frontend
gulp.task('start-frontend', function (cb) {
  const frontendProcess = spawn('npm', ['run', 'dev'], { cwd: '../frontend', shell: true });

  frontendProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  frontendProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  frontendProcess.on('close', (code) => {
    cb(code === 0 ? null : `Erro ao iniciar o frontend com código ${code}`);
  });
});

// Tarefa para iniciar ambos
gulp.task('start', gulp.parallel('start-backend', 'start-frontend'));