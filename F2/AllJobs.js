import React, { Component } from 'react'
import { SelectField, Grid, Cell } from 'react-md'
import GridView from './GridView'
import CardView from './CardView'

import DataJobs from './Data.json'

import './alljobs.css'
export default class AllJobs extends Component {
  constructor (props) {
    super()
    this.listJobs = this.listJobs.bind(this)

    this.state = {
      view: 'Card View'
    }
  }
  listJobs () {
    return DataJobs.map((el, index) => (

      <Grid className="grid-style" key={index}>
        <Cell size={2} phoneSize={4}>
          <p>{el.name}</p>
          <p>{el.company}</p>
          <p>{el.type}</p>
          <p>{el.location}</p>
        </Cell>
      </Grid>

    ))
  }

  changeGrid (value) {
    this.setState({
      view: value
    })
  }
  render () {
    const STRING_ITEMS = ['Card View', 'Grid View']
    const {view} = this.state
    return (
      <div>
        <SelectField
          id="select-field-with-elements"
          menuItems={STRING_ITEMS}
          className="md-cell md-cell--1"
          sameWidth
          onChange={ (value) => (this.changeGrid(value)) }
          value={view}
        />
        {view === 'Card View' && <CardView listjob={this.listJobs()}/> }
        {view === 'Grid View' && <GridView /> }

      </div>
    )
  }
}

