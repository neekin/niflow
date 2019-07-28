import React, { Fragment } from 'react'

import IndexListItem from './card'

class IndexList extends React.Component {
  render() {
    return (
      <Fragment>
        <IndexListItem />
        <IndexListItem />
        <IndexListItem />
        <IndexListItem />
        <IndexListItem />
        <IndexListItem />
      </Fragment>
    )
  }
}

export default IndexList
