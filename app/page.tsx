import Navbar from "./Components/Navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Navbar/>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Tech Interview x MapoTapo
        </p>
      </div>
      <div className="flex flex-col mt-12 items-center justify-center w-full max-w-5xl">
        <h1 className="text-4xl font-bold text-center">Welcome to Tech Interview</h1>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Read the README.md and solve the challenges!
          </p>
          </div>
        </div>
    </main>
  )
}
