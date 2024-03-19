import { redirect } from 'next/navigation'
import React from 'react'

interface PageProps {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}

export default function page({ searchParams }: PageProps) {
    const query = searchParams.query

    if (Array.isArray(query) || !query) {
        return redirect('/')
    }

    return (
        <div>page</div>
    )
}
