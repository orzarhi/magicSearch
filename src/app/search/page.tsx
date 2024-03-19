import { db } from '@/db'
import { productsTable } from '@/db/schema'
import { sql } from 'drizzle-orm'
import { redirect } from 'next/navigation'
import React from 'react'

interface PageProps {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}

export default async function page({ searchParams }: PageProps) {
    const query = searchParams.query

    if (Array.isArray(query) || !query) {
        return redirect('/')
    }

    // let products = await db.select().from(productsTable).where(
    //     sql`to_tsvector(name) @@ plainto_tsquery(${query})`
    // )

    return (
        <div>page</div>
    )
}
