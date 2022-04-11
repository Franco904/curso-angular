const express = require('express');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Removido com a utilização do Angular Proxy
// const corsOptions = {
//     origin: '*',
//     optionsSuccessStatus: 200,
// }
// app.use(cors(corsOptions));


const multipartMiddleware = multipart({ uploadDir: './uploads' })
app.post('/upload', multipartMiddleware, (req, res) => {
    const files = req.files;
    console.log(files);

    res.json({ message: files });
});


app.get('/downloadExcel', (_, res) => {
    res.download('./uploads/report.xlsx');
});

app.get('/downloadPdf', (_, res) => {
    res.download('./uploads/report.pdf');
});


app.use((err, _, res, _) => res.json({ error: err.message }));

app.listen(8000, () => console.log('Servidor porta 8000'))


