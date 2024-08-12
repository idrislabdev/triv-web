import React from 'react'

const StakingHeaderSection = (props: {lang:string}) => {
  const { lang } = props
  return (
    <section className='staking-header-section'>
        <h1>{lang.title}</h1>
        <p>{lang.description}</p>
    </section>
  )
}

export default StakingHeaderSection
