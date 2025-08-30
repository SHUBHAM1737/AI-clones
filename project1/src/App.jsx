import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(12)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 999)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="w-full max-w-md mx-auto shadow-lg rounded-2xl px-6 py-6 my-8 bg-gray-800 text-orange-400 border border-gray-700">
        
        <h1 className="text-2xl font-bold text-center text-white mb-6 tracking-wide">
          🔐 Password Generator
        </h1>

        {/* Password box */}
        <div className="flex shadow-md rounded-lg overflow-hidden mb-6">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 bg-gray-900 text-orange-400 text-lg rounded-l-lg"
            placeholder="Generated password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors text-white px-4 py-2 font-medium rounded-r-lg"
          >
            Copy
          </button>
        </div>

        {/* Controls */}
        <div className="space-y-4">
          {/* Length */}
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={6}
              max={32}
              value={length}
              className="cursor-pointer w-full accent-orange-500"
              onChange={(e) => setLength(e.target.value)}
            />
            <span className="text-sm font-medium text-white">Length: {length}</span>
          </div>

          {/* Options */}
          <div className="flex justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                className="accent-orange-500 w-4 h-4"
              />
              <span className="text-white">Include Numbers</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
                className="accent-orange-500 w-4 h-4"
              />
              <span className="text-white">Include Symbols</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
