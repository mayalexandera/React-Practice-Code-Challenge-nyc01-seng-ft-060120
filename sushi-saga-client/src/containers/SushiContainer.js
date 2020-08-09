import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className='belt'>
        {props.sushis.map((sushi) => (
          <Sushi
            taken={props.eaten.includes(sushi)}
            eatSushi={props.eatSushi}
            key={sushi.id}
            sushi={sushi}
          />
        ))}
        <MoreButton more={props.more} />
      </div>
    </Fragment>
  );
}

export default SushiContainer