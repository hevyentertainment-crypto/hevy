import React from 'react'

export default function Headers({title}: {title: string}) {
  return (
    <h1 className=" min-[300px]:text-[4rem] text-[3rem] sm:text-[8rem] font-semibold leading-[4rem] sm:leading-[7rem]">
                {title.toUpperCase()}
    </h1>
  )
}
