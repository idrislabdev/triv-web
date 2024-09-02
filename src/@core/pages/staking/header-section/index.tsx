import React from 'react'

const StakingHeaderSection = (props: {objLang:any}) => {
  const { objLang } = props
  return (
    <section className='staking-header-section'>
        <h1>{objLang.title}</h1>
        <p>{objLang.description}</p>
    </section>
  )
}

export default StakingHeaderSection
