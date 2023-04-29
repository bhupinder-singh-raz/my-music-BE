import express from 'express';
const router = express.Router();
import upload from "../middleware/multer.middleware.js";

import { addMusicToUserVoice } from './../controller/user.controller.js'

// router.post("/addMusicToUserVoice", upload.fields([{ name: 'recordingFile'}, { name: 'musicFile' }]), addMusicToUserVoice);
// router.post("/addMusicToUserVoice", upload.fields([{ name: 'recordingFile' }, { name: 'musicFile' }]), addMusicToUserVoice);
router.post("/addMusicToUserVoice", upload.fields([{ name: 'recordingFile' }, { name: 'musicFile' }]), addMusicToUserVoice);

export default router;