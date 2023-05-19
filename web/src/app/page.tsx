import Copyright from '@/components/Copyright'
import EmptyMemories from '@/components/EmptyMemories'
import Hero from '@/components/Hero'
import Profile from '@/components/Profile'
import Signin from '@/components/Signin'
import { cookies } from 'next/headers'
export default function Home() {
  const isAutenticated = cookies().has('token')
  return (
    <main className="grid grid-cols-2 min-h-screen">
      <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className=" absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 rounded-full translate-x-1/2 bg-purple-700 opacity-50 blur-full" />
        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes"></div>

        {/* loga */}
        {isAutenticated ? <Profile/> :<Signin />}

        {/* HERO */}
        <Hero />

        {/* copyrhgit */}
        <Copyright />

      </div>

      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        {/* emptyMemories */}
        <EmptyMemories />
      </div>
    </main>
  )
}
