import React, { Component } from 'react'
import Table from '@target-energysolutions/data-table'
import '@target-energysolutions/data-table/styles.css'

const fakeData = Array.from({ length: 200 }).map((_, i) => ({
  a: (Math.random() * 100).toFixed(2),
  b: 'hello' + i
}))

const tableConfig = [
  {
    name: 'CREATED DATE',
    dataKey: 'a',
    width: 300
  },
  {
    name: 'POSITION NAME',
    dataKey: 'b'
  },
  {
    name: 'CAREER LEVEL',
    dataKey: 'a',
    width: 300
  },
  {
    name: 'EMPLOYMENT TYPE',
    dataKey: 'b'
  },
  {
    name: 'MIN EXPERIENCE',
    dataKey: 'a',
    width: 300
  },
  {
    name: 'MIN QUALIFICATION',
    dataKey: 'a',
    width: 300
  },
  {
    name: 'APPLY BEFORE',
    dataKey: 'a',
    width: 300
  },
  {
    name: 'SHORTLISTED',
    dataKey: 'a',
    width: 300
  },
  {
    name: 'STATUS',
    dataKey: 'a',
    width: 300
  }
]
class GridView extends Component {
  state = {
    data: fakeData
  }

  render () {
    return (
      <div>
        <div className="table-container">

          <Table
            title="All Positions"
            data={fakeData}
            columnsConfig={tableConfig}
            actions={[
              {
                text: 'View',
                icon: 'search',
                onClick (data) {
                  console.log(data)
                }
              }
            ]}
          />

        </div>
      </div>
    )
  }
}
export default GridView

