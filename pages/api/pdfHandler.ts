import { NextApiRequest, NextApiResponse } from "next";
import formidable, { File } from "formidable";
import fs from "fs";
import pdfParse from "pdf-parse";

/* Configuring the Next.js API route to disable the built-in body parsing middleware. */
export const config = {
  api: {
    bodyParser: false,
  },
};

/**
 * Handles file uploads, extracts text from a PDF file, and returns the text in a JSON response.
 * @param {NextApiRequest} req - The `req` parameter is an object that represents the incoming HTTP request in a Next.js API route. It contains information about the request such as the HTTP method, headers, and query parameters.
 * @param {NextApiResponse} res - An object representing the HTTP response that will be sent back to the client.
 */

export default async function pdfHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const form = new formidable.IncomingForm();

    /* Parse the incoming request and extract any files that were uploaded with the request. */
    form.parse(req, async (err, fields, files) => {
      if (err) {
        throw err;
      }
      // Extract text from PDF file
      const file = files.file as File;
      const dataBuffer = fs.readFileSync(file.filepath);
      const pdfData = await pdfParse(dataBuffer);

      /* Send a JSON response to the client containing the extracted text from the PDF file. */
      res.status(200).json({ text: pdfData.text });
    });
  } catch (error: any) {
    /* Send a JSON response to the client with an error message in the response body when an error occured. */
    res.status(500).json({ error: error.message });
  }
}
