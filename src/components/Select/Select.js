import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import './Select.css'
const statusOptions = [
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

const Select = ({selectChange}) => (
  <Dropdown
    placeholder='Status'
    fluid selection clearable
     options={statusOptions}
     onChange={selectChange}
    />
)

export default Select;
