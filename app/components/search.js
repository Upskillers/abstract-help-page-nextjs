import { useCallback, useRef, useState } from 'react'
import Link from 'next/link'

export default function Search({onFocusHandler}) {
  const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState(null)

  const searchEndpoint = (query) => `/api/search?q=${query}`

  const onChange = useCallback((event) => {
    const query = event.target.value
    setQuery(query)
    if (query.length) {
      fetch(searchEndpoint(query))
        .then((res) => res.json())
        .then((res) => {
          setResults(res.results)
        })
    } else {
      setResults([])
    }
  }, [])

  const onFocus = useCallback(() => {
    setActive(true)
    window.addEventListener('click', onClick)
  }, [])

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false)
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <div className="relative" ref={searchRef}>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
      </div>
      <input
        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300
                   rounded-lg bg-white focus:ring-blue-100 focus:border-blue-100
                 dark:bg-gray-700 dark:border-gray-600 dark:text-white 
                 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={onChange}
        onFocus={onFocus}
        placeholder="Search Articles"
        type="text"
        value={query}
      />
      <ul className="overflow-hidden absolute w-full bg-white rounded-b-md">
        {active && results != null && results.length > 0 && (
          <div>
            {results.map(({ id, title }) => (
              <li className="p-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" key={id}>
                <Link href="/articles/[id]" as={`/articles/${id}`}>
                  {title}
                </Link>
              </li>
            ))}
          </div>
        )}
        {active && results != null && results.length == 0 && query.length > 0 && (
          <li className="p-4">
            <p>No results found</p>
          </li>
        )}
        {active && results == null && query.length > 0 && (
          <li className="p-4">
            <p>Loading...</p>
          </li>
        )}
      </ul>

    </div>
  )
}