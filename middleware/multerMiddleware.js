import multer from 'multer';
import DataParser from 'datauri/parser.js';
import path from 'path';

const storage = multer.memoryStorage();

const upload = multer({ storage });

const parser = new DataParser();

export const formatImage = (file) => {
  const fileExtensions = path.extname(file.originalname).toString();
  return parser.format(fileExtensions, file.buffer).content;
};

export default upload;
