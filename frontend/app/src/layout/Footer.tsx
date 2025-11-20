export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="w-full border-t bg-white dark:bg-slate-700 border-zinc-200 dark:border-slate-800 py-6 px-8 text-center text-sm text-zinc-700 dark:text-slate-100">
            &copy; {year} Business Name. All rights reserved.
        </footer>
    )
}