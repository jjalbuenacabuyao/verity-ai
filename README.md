# Research Paper: VerityAI: Enhancing Academic Integrity Through a Web-Based Detector for AI-Generated Text

Website: <a target="_blank" href="https://verity-ai.vercel.app">VerityAI</a><br>
Researchers: <b>Joel J. Cabuyao</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Nice L. Oabel</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Kristine Karmel V. Nacion</b><br>
Research Adviser: <b>Engr. Carl Darren M. Apelacion</b><br>
Research Professor: <b>Mr. Arnulfo Jr D. Señores</b>


## System Overview
VerityAI is a web-based system that was designed to identify AI-generated text contents from ChatGPT on student's academic submissions. It uses an open source Large Language Model (LLM) called RoBERTa Base OpenAI Detector from Hugging Face. The users can upload docx and pdf files to the detector and can download the detection report after the detection. Additionally, administrators can also add, delete, and update the permission os users using the dashboard. 

## How to fork this code in your machine?
<ol>
  <li>
  Clone the repository.

  ```bash
  git clone https://github.com/jjalbuenacabuyao/verity-ai.git
  ```
  </li>

  <li>
    Open the folder in your text editor.
  </li>

  <li>
    Open the terminal and run the following:

```bash
npm install
```
  </li>

  <li>
  Create a .env file that contains the following variables:

```
DATABASE_URL=/*Your database URL*/
NEXTAUTH_SECRET="NEXTAUTH_SECRET"
NEXTAUTH_URL="http://localhost:3000"
```
  </li>

  <li>
  Create .env.local file that contains the following variables:

```
NEXT_PUBLIC_API_URL=/*RoBERTa Base API URL*/
NEXT_PUBLIC_ACCESS_TOKEN=/*Access tokes from HuggingFace seperated by a comma and a space.*/
```
  </li>

  <li>
  Once the modules were installed, run the following command in the terminal:

```bash
npm run dev
```
  </li>

  <li>

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
  </li>
</ol>

## Programming Language, Libraries, and Frameworks
<ul>
<li>

[Next.js](https://nextjs.org/)
</li>

<li>

[Tailwind](https://tailwindcss.com/)
</li>

<li>

[TypeScript](https://www.typescriptlang.org/)
</li>

<li>

[Prisma](https://www.prisma.io/)
</li>

<li>

[MongoDB](https://www.mongodb.com/)
</li>

<li>

[NextAuth](https://next-auth.js.org/)
</li>
</ul>

## Documentation
Documentation can be found in docs folder documentation.md file.

