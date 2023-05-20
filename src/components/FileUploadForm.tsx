import { ChangeEvent, FormEvent, useState } from 'react';

export default function FileUploadForm() {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      const response = await fetch('/api/fileHandler', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log(data);
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
}