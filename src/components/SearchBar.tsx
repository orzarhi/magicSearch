'use client'

import React, { useRef, useState, useTransition } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Loader2, Search } from 'lucide-react'
import { useRouter } from 'next/navigation'

export const SearchBar = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const [isSearching, startTransition] = useTransition()

    const router = useRouter()

    const [query, setQuery] = useState<string>('')

    const search = () => {
        startTransition(() => {
            router.push(`/search?query=${query}`)
        })
    }

    return (
        <main className='relative w-full h-14 flex flex-col bg-white'>
            <div className='relative h-14 z-10 rounded-md'>
                <Input
                    className='absolute inset-0 h-full'
                    value={query}
                    onChange={({ target }) => setQuery(target.value)}
                    disabled={isSearching}
                    ref={inputRef}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            search()
                        }
                        if (e.key === 'Escape') {
                            inputRef?.current?.blur()
                        }
                    }}
                />
                <Button
                    className='absolute right-0 h-full inset-y-0 rounded-l-none'
                    size='sm'
                    onClick={search}
                    disabled={isSearching}
                >
                    {isSearching ? <Loader2 className='h-6 w-6 animate-spin' /> : <Search className='h-6 w-6' />}
                </Button>
            </div>
        </main>
    )
}
