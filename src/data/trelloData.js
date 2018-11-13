import {vacancies} from './vacancies'
export const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'All Vacancies',
      label: '2/2',
      cards: [
        {id: 'Card'+ vacancies[0].id, title: vacancies[0].position, description: vacancies[0].companyName, label: "$"+ vacancies[0].salary},
        {id: 'Card'+ vacancies[1].id, title: vacancies[1].position, description: vacancies[1].companyName, label: "$"+ vacancies[1].salary},
        {id: 'Card'+ vacancies[2].id, title: vacancies[2].position, description: vacancies[2].companyName, label: "$"+ vacancies[2].salary},
        {id: 'Card'+ vacancies[3].id, title: vacancies[3].position, description: vacancies[3].companyName, label: "$"+ vacancies[3].salary},
        {id: 'Card'+ vacancies[4].id, title: vacancies[4].position, description: vacancies[4].companyName, label: "$"+ vacancies[4].salary},
        {id: 'Card'+ vacancies[5].id, title: vacancies[5].position, description: vacancies[5].companyName, label: "$"+ vacancies[5].salary},
        {id: 'Card'+ vacancies[6].id, title: vacancies[6].position, description: vacancies[6].companyName, label: "$"+ vacancies[6].salary},
        {id: 'Card'+ vacancies[7].id, title: vacancies[7].position, description: vacancies[7].companyName, label: "$"+ vacancies[7].salary},
        {id: 'Card'+ vacancies[8].id, title: vacancies[8].position, description: vacancies[8].companyName, label: "$"+ vacancies[8].salary},
        {id: 'Card'+ vacancies[9].id, title: vacancies[9].position, description: vacancies[9].companyName, label: "$"+ vacancies[9].salary},
        {id: 'Card'+ vacancies[10].id, title: vacancies[10].position, description: vacancies[10].companyName, label: "$"+ vacancies[10].salary},
        {id: 'Card'+ vacancies[11].id, title: vacancies[11].position, description: vacancies[11].companyName, label: "$"+ vacancies[11].salary},
        {id: 'Card'+ vacancies[12].id, title: vacancies[12].position, description: vacancies[12].companyName, label: "$"+ vacancies[12].salary},
        {id: 'Card'+ vacancies[13].id, title: vacancies[13].position, description: vacancies[13].companyName, label: "$"+ vacancies[13].salary},
        {id: 'Card'+ vacancies[14].id, title: vacancies[14].position, description: vacancies[14].companyName, label: "$"+ vacancies[14].salary},
        {id: 'Card'+ vacancies[15].id, title: vacancies[15].position, description: vacancies[15].companyName, label: "$"+ vacancies[15].salary},
        {id: 'Card'+ vacancies[16].id, title: vacancies[16].position, description: vacancies[16].companyName, label: "$"+ vacancies[16].salary},
        {id: 'Card'+ vacancies[17].id, title: vacancies[17].position, description: vacancies[17].companyName, label: "$"+ vacancies[17].salary},
        {id: 'Card'+ vacancies[18].id, title: vacancies[18].position, description: vacancies[18].companyName, label: "$"+ vacancies[18].salary},
        {id: 'Card'+ vacancies[19].id, title: vacancies[19].position, description: vacancies[19].companyName, label: "$"+ vacancies[19].salary},
        {id: 'Card'+ vacancies[20].id, title: vacancies[20].position, description: vacancies[20].companyName, label: "$"+ vacancies[20].salary},
        {id: 'Card'+ vacancies[21].id, title: vacancies[21].position, description: vacancies[21].companyName, label: "$"+ vacancies[21].salary},
        {id: 'Card'+ vacancies[22].id, title: vacancies[22].position, description: vacancies[22].companyName, label: "$"+ vacancies[22].salary},
        {id: 'Card'+ vacancies[23].id, title: vacancies[23].position, description: vacancies[23].companyName, label: "$"+ vacancies[23].salary},
        {id: 'Card'+ vacancies[24].id, title: vacancies[24].position, description: vacancies[24].companyName, label: "$"+ vacancies[24].salary},
        {id: 'Card'+ vacancies[25].id, title: vacancies[25].position, description: vacancies[25].companyName, label: "$"+ vacancies[25].salary},
        {id: 'Card'+ vacancies[26].id, title: vacancies[26].position, description: vacancies[26].companyName, label: "$"+ vacancies[26].salary},
        {id: 'Card'+ vacancies[27].id, title: vacancies[27].position, description: vacancies[27].companyName, label: "$"+ vacancies[27].salary},
        {id: 'Card'+ vacancies[28].id, title: vacancies[28].position, description: vacancies[28].companyName, label: "$"+ vacancies[28].salary},
        {id: 'Card'+ vacancies[29].id, title: vacancies[29].position, description: vacancies[29].companyName, label: "$"+ vacancies[29].salary}
      ]
    },
    {
      id: 'lane2',
      title: 'Send Resume',
      label: '0/0',
      cards: []
    },
    {
      id: 'lane3',
      title: 'Interview',
      label: '0/0',
      cards: []
    },
    {
      id: 'lane4',
      title: 'Offer',
      label: '0/0',
      cards: []
    },
    {
      id: 'G',
      title: 'Rejected',
      label: '0/0',
      cards: []
    }
  ]
}
