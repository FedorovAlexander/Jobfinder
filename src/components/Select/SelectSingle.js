import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import './SelectSingle.css'
const statusOptionsSingle = [
  {
    text: '',
    value: ''
  },
  {
    text: 'Offer',
    value: 'Offer'
  },
  {
    text: 'Candidate',
    value: 'Candidate'
  },
  {
    text: 'Decline',
    value: 'Decline'
  },
  {
    text: 'Not interested',
    value: 'Not interested'
  }
]

const SelectSingle = () => (
  <Dropdown placeholder='Status'
     fluid selection
     options={statusOptionsSingle}

    />
)

export default SelectSingle;
