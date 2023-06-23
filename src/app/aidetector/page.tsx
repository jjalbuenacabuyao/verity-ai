"use client";

import React, { useState } from 'react';
import { Aside, Header, Result } from '@/components';


const AiDetector = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <>
      <Header />
      <main className="mx-6">
        <Aside setFiles={setFiles} setIsLoading={setIsLoading} />
        <Result setIsLoading={setIsLoading} files={files} isLoading={isLoading} />
      </main>
    </>
  )
}

export default AiDetector