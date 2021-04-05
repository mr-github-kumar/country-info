import React from 'react'

function Loading() {
    return (
        <main className="w-full h-screen bg-white dark:bg-dark-1 text-dark-1 dark:text-light flex justify-center items-center gap-4">
            <i className="animate-spin  fas fa-sync text-5xl"></i>
            <h1 className="text-lg font-semibold">Laoding Page...</h1>
        </main>
    )
}

export default Loading
