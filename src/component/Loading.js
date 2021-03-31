import React from 'react'

function Loading() {
    return (
        <main className="w-full h-screen bg-dark-1 flex justify-center items-center gap-4">
            <i className="animate-spin text-white fas fa-sync text-5xl"></i>
            <h1 className="text-white text-lg font-semibold">Laoding Page...</h1>
        </main>
    )
}

export default Loading
