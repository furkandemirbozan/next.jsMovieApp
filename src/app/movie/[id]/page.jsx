import Image from 'next/image'
import React from 'react'


const getMovie = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b37c04a4e6a0f68c76efea44c1f4c273&language=en-US`)
    return await res.json()
}

const Page = async ({ params }) => {
    const id = params.id;
    const movieDetail = await getMovie(id)
    return (
        <div className='flex items-center justify-center '>

            <div className='relative p-7 min-h-screen'>
                <Image width={600} height={450} src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`} />
                <div className='absolute'>
                    <div className='text-4xl font-bold my-3'>
                        {movieDetail?.title}
                    </div>
                    <div className='w-1/2'>
                        {movieDetail?.overview}
                    </div>
                    <div className='my-5'>
                        {movieDetail?.release_date}-{movieDetail?.vote_average}
                    </div>
                    <div className='border w-32 p-2 hover:bg-white hover:text-black rounded-md text-center text-lg cursor-pointer'>
                        Trail
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Page