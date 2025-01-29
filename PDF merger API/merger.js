import PDFMerger from 'pdf-merger-js';

const merger = new PDFMerger();

export const pdfMerger = async (filePaths, id) => {
  for (const path of filePaths) {
    await merger.add(path); // Dynamically add each file
  }

  await merger.save(`public/${id}_merged.pdf`);
};


