"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Search } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "../../lib/utils"

const SUGGESTIONS = [
  "Los Angeles, CA",
  "New York, NY",
  "Austin, TX",
  "San Francisco, CA",
  "Chicago, IL",
  "Miami, FL",
  "Palm Springs, CA",
  "Seattle, WA",
  "Condo in Dallas",
  "Luxury home in West Hollywood"
]

interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
}

const SearchBar = ({ placeholder = "Search...", onSearch }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState<string[]>([])
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)

    if (value.trim()) {
      const filtered = SUGGESTIONS.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
      setSuggestions(filtered)
    } else {
      setSuggestions([])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery)
      setIsFocused(false)
    }
  }

  return (
    <div className="relative w-full z-50 flex flex-col items-center">
      <motion.form
        onSubmit={handleSubmit}
        className="relative flex items-center justify-center w-full"
        initial={{ width: "320px" }}
        animate={{ 
            width: isFocused ? "100%" : "320px",
            maxWidth: isFocused ? "680px" : "320px"
        }}
        transition={{
            type: "spring",
            stiffness: 350,
            damping: 28,
            mass: 0.8
        }}
      >
        {/* Rainbow Border Container */}
        <motion.div
            className="absolute -inset-[3px] rounded-full -z-10"
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: isFocused ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
        >
            <div className="w-full h-full rounded-full bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-500 animate-rainbow bg-[length:200%_auto] blur-[1px]" />
        </motion.div>

        {/* Outer Glow */}
        <motion.div
            className="absolute -inset-4 rounded-full -z-20 opacity-0"
            animate={{ 
                opacity: isFocused ? 0.4 : 0,
            }}
            transition={{ duration: 0.3 }}
        >
             <div className="w-full h-full rounded-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 blur-xl opacity-50" />
        </motion.div>

        {/* Input Container */}
        <div 
            className={cn(
                "flex items-center w-full h-14 rounded-full bg-white relative overflow-hidden transition-all duration-300",
                !isFocused && "shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] border border-slate-200"
            )}
            onClick={() => {
                setIsFocused(true)
                inputRef.current?.focus()
            }}
        >
          {/* Subtle Inner Rainbow Tint on Focus */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-red-100/10 via-blue-100/10 to-purple-100/10 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: isFocused ? 1 : 0 }}
          />

          <div className="pl-5 pr-3">
             <Search 
                size={20} 
                className={cn(
                    "transition-colors duration-300", 
                    isFocused ? "text-brand-600" : "text-slate-400"
                )} 
            />
          </div>

          <input
            ref={inputRef}
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={handleSearch}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            className="w-full h-full bg-transparent outline-none placeholder:text-slate-400 font-medium text-base text-slate-900 pr-4 relative z-10"
          />

          <AnimatePresence>
            {searchQuery && (
              <motion.button
                type="submit"
                initial={{ opacity: 0, scale: 0.8, x: 10, marginRight: -80 }}
                animate={{ opacity: 1, scale: 1, x: 0, marginRight: 8 }}
                exit={{ opacity: 0, scale: 0.8, x: 10, marginRight: -80 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mr-2 px-6 py-2 rounded-full bg-brand-600 text-white font-semibold text-sm hover:bg-brand-700 transition-colors shadow-md whitespace-nowrap z-20"
              >
                Search
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </motion.form>

      {/* Suggestions Dropdown */}
      <AnimatePresence>
        {isFocused && suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 12, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full z-40 w-full max-w-[680px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-100/50 overflow-hidden"
          >
             <div className="py-2">
              {suggestions.map((suggestion) => (
                <div
                  key={suggestion}
                  className="flex items-center gap-3 px-6 py-3.5 cursor-pointer hover:bg-brand-50/60 transition-colors group"
                  onMouseDown={(e) => {
                      e.preventDefault();
                      setSearchQuery(suggestion);
                      if (onSearch) onSearch(suggestion);
                      setIsFocused(false);
                  }}
                >
                  <Search size={16} className="text-slate-300 group-hover:text-brand-500 transition-colors" />
                  <span className="text-slate-600 group-hover:text-slate-900 font-medium">{suggestion}</span>
                </div>
              ))}
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export { SearchBar }
