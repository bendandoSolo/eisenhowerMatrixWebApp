import * as fs from 'fs';
import { Document, Packer, Paragraph, TextRun } from 'docx';

// Documents contain sections, you can have multiple sections per document, go here to learn more about sections
// This simple example will only contain one section
const doc = new Document({
    sections: [
        {
            properties: {},
            children: [
                new Paragraph({
                    children: [
                        new TextRun('Hello World'),
                        new TextRun({
                            text: 'Foo Bar',
                            bold: true
                        }),
                        new TextRun({
                            text: '\tGithub is the best',
                            bold: true
                        })
                    ]
                })
            ]
        }
    ]
});

// Used to export the file into a .docx file
async function createWordDocument (): Promise<void> {
    try {
        const buffer = await Packer.toBuffer(doc); // Await the promise to resolve
        fs.writeFileSync('My Document.docx', buffer); // Write the buffer to a .docx file
        console.log('Document created successfully.');
    } catch (error) {
        console.error('Failed to create document:', error);
    }
}

void createWordDocument();
