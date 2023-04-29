import Ffmpeg from 'fluent-ffmpeg';
import { path } from '@ffmpeg-installer/ffmpeg';
Ffmpeg.setFfmpegPath(path);
import * as url from 'url';
import pathModule from 'path';
import { Readable } from 'stream';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));



export async function addMusicToUserVoice(req, res, next) {
  try {
    // const audio1Path = './audio/sample.mp3';
    // const audio2Path = './audio/myaudio.wav';

    const musicFile = req.files.musicFile[0];
    const myRecording = req.files.recordingFile[0];

    console.log('req.files ****************', req.files);

    const myPromise1 = new Promise((resolve, reject) => {
      Ffmpeg(Readable.from(musicFile.buffer))
        .toFormat('wav')
        .on('error', reject)
        .on('progress', (progress) => {
          console.log('Processing: ' + progress.targetSize + ' KB converted');
        })
        .on('end', resolve)
        .save('./audio/convertedInto.wav');
    });

    await myPromise1;

    const myPromise2 = new Promise((resolve, reject) => {
      Ffmpeg()
        .input('./audio/convertedInto.wav')
        .input(Readable.from(myRecording.buffer))
        .complexFilter([
          {
            filter: 'amix', options: { inputs: 2, duration: 'shortest' }
          }
        ])
        .on('end', resolve)
        .saveToFile("./audio/output.wav");
    });

    await myPromise2;

    console.log('Request ends');

    // res.download();
    res.sendFile(pathModule.join(__dirname, '../audio/output.wav'));
  }
  catch (error) {
    next(error);
  }
}
