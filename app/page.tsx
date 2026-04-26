"use client"
import { useState } from "react"
import Editor from "./codemirror/page"
import { Button } from "@/components/ui/button"
const Home = () => {
  const [code, setCode] = useState("")

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="w-full h-full  ">
        <div className="w-1/2 h-screen bg-black">
        <Button variant="outline">Run</Button>
          <Editor code={code} setCode={setCode} selectedLanguage="python" />
        </div>
      </div>
    </div>

  )
}

export default Home