'use client'

import Link from "next/link"

export default function SearchFormReset () {
    function reset() {
        const form = document.querySelector('.search-form') as HTMLFormElement
        if (form) form.reset()
    }
    return (
        <button
            type="reset"
            onClick={reset}
        >
            <Link href="/" className="search-btn text-white">
                X
            </Link>
        </button>
    )
}