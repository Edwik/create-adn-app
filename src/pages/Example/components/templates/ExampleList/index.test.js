import React from 'react'
import { shallow } from 'enzyme'

import ExampleListTemplate from './'

describe('Example List Template', () => {

  describe('Rendering',  () => {
    it('should match to snapshot', () => {
      const warpper = shallow(<ExampleListTemplate />)
      console.log(warpper.html())
    })
  })
})