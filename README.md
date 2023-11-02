# Research Paper: VerityAI: Web-Based Artificial Intelligence Generated Text Detector

Website: <a target="_blank" href="https://verity-ai.vercel.app">VerityAI</a><br>
Researchers: <b>Joel J. Cabuyao</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Nice L. Oabel</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Kristine Karmel V. Nacion</b><br>
Research Adviser: <b>Engr. Carl Darren M. Apelacion</b><br>
Research Professor: <b>Mr. Arnulfo Jr D. Señores</b>


## System Overview
VerityAI is a web-based system that was designed to identify AI-generated text contents from ChatGPT on student's academic submissions. It uses an open source Large Language Model (LLM) called RoBERTa Base OpenAI Detector from Hugging Face. The users can upload docx and pdf files to the detector and can download the detection report after the detection. Additionally, administrators can also add, delete, and update the permission os users using the dashboard. 

## How to run this code in your machine?

1. Clone the repository.

```bash
git clone https://github.com/jjalbuenacabuyao/verity-ai.git
```

2. Open the folder in your text editor.

3. Open the terminal and run the following:
```bash
npm install
```

4. Create a .env file that contains the following variables:
```
DATABASE_URL=/*Your database URL*/
NEXTAUTH_SECRET="NEXTAUTH_SECRET"
NEXTAUTH_URL="http://localhost:3000"
```

5. Create .env.local file that contains the following variables:
```
NEXT_PUBLIC_API_URL=/*RoBERTa Base API URL*/
NEXT_PUBLIC_ACCESS_TOKEN=/*Access tokes from HuggingFace seperated by a comma and a space.*/
```

6. Once the modules were installed, run the following command in the terminal:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

