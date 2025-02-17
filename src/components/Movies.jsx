"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Movies = ({ dt }) => {
    const router = useRouter()
    console.log(dt, "dt")
    return (
        <div onClick={() => router.push(`/movie/${dt?.id}`)} className='min-w-[400px] relative imgContainer'>
            <Image style={{ objectFit: 'cover' }} width={450} height={450} src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`} />
            <div className='absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity'>
                <div className='text-xl font-bold'>
                    {dt?.title}
                </div>
                <div>{dt?.release_date}-{dt?.vote_average}</div>
            </div>
        </div>

    )
}

export default Movies