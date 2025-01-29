
import { pdfMerger } from "./merger.js"
import express from "express"
import path from "path"
const app = express()
import multer from "multer"
import { fileURLToPath } from "url";
const port = 3000
const upload = multer({ dest: 'uploads/' })
import uniqid from 'uniqid';
app.use("/static", express.static('public'))


// Mimic `__dirname` for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
})
let id

app.post('/merge', upload.array('pdfs', 3), async function (req, res) {
  const files = req.files;
  const id = uniqid();

  // Pass the file paths to the merger function
  const paths = files.map(file => file.path);
  await pdfMerger(paths, id);

  res.redirect(`http://localhost:3000/static/${id}_merged.pdf`);
});



app.listen(port, () => {
  console.log(`Example app listening on port http:localhost:${port}`)
})
