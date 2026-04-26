"use client"
import { Button } from "@/components/ui/button"
import { runCode } from "@/lib/runCode"
import { useState } from "react"
import Editor from "./editor/page"
const Home = () => {
  const [code, setCode] = useState("")
  const [languageId, setLanguageId] = useState(71)
  const [problemId, setProblemId] = useState("fba4e4ee-7439-4f32-b9f1-7adaf2ea0719")


  const handleRun = async () => {
    try {
      console.log("clicked")
      const result = await runCode(code, languageId, problemId)
      console.log(result)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="w-full h-full  ">
        <div className="w-1/2 h-screen bg-black ">
          <div className="flex flex-1 justify-end px-2 gap-2">
            <select className="bg-white " defaultValue={71} onChange={(e) => setLanguageId(Number(e.target.value))} >
              <option value={71}>Python</option>
              <option value={91}>Java</option>
              <option value={54}>C++</option>
              <option value={63}>JS</option>
            </select>
            <Button variant="outline" onClick={handleRun}>Run</Button>
          </div>
          <Editor code={code} setCode={setCode} selectedLanguage="python" />
        </div>
      </div>
    </div>

  )
}

export default Home