PDFDocument = require('pdfkit');

function buildPdf(dataCallback, endCallback) {
    const doc = new PDFDocument;
    doc.on('data', dataCallback);
    doc.end('end',endCallback);
    doc
        .fontSize(25)
        .text('Some heading');
    doc.end();

}

module.exports = {buildPdf};