import React from 'react'

const LiverateHeaderSection = (props: {objLang:any}) => {
  const { objLang } = props
  return (
    <section className='liverate-header-section'>
        <h2>{objLang.title}</h2>
        <p>{objLang.description}</p>
    </section>
  )
}

export default LiverateHeaderSection
