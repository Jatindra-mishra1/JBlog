import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const app = express();
const router = express.Router();
const path = dirname(fileURLToPath(import.meta.url))
const port = 2127;
app.use(express.static('public'))
app.listen(port,()=>{
  console.log("Server is running on port: ", port);}
)

router.route("/")
    .get((req, res)=>{
        res.render("../public/views/home.ejs");
    });

app.use(router);
