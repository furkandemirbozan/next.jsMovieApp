import Movies from '@/components/Movies'
import React from 'react'

const Page = async ({ params }) => {
    const keyword = params.keyword
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b37c04a4e6a0f68c76efea44c1f4c273&query=${keyword}&language=en-US&include_adult=false`)
    const data = await res.json()


    console.log(data, "data")
    return (
        <div>
            {
                !data?.results ?
                    <div>Aranılan şey bulunamadı!!!</div> :
                    <div className='flex items-center flex-wrap gap-3'>
                        {
                            data?.results?.map((dt, i) => (
                                <Movies key={i} dt={dt} />
                            ))
                        }

                    </div>

            }
        </div>

    )
}

export default Page