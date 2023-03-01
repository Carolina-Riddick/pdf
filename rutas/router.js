const express = require('express');
const pdfService = require('../service/pdfService.js')

const router = express.Router();

router.get('/',(req, res) => {
    res.send("Todo bien escuchando en el puerto 3000")

});


router.get('/pdf', (req,res) => {
    const stream = res.writeHead(200, {
        'content-type' : 'application/pdf',
        'Content-Disposition' : 'attachment, filename=invoce.pdf' // le dice al browser donde va a estar puesto ese contenido, si estara visible en la ventana o se descarga

    }) ;

    pdfService.buildPdf(
        (chunk) => stream.write(chunk),
        () => stream.end
    )

});



module.exports = router;