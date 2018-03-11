import React from 'react'
import { connect } from 'react-redux'

import { createAnecdote  } from '../reducers/anecdoteReducer'
import { setNote, clearNote } from '../reducers/notificationReducer'


class AnecdoteForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    this.propscreateAnecdote(content)
    e.target.anecdote.value = ''
    this.props.setNote(content)
    setTimeout(() => {
      this.props.clearNote()
    }, 5000)
  }
  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = {
  createAnecdote,
  setNote,
  clearNote
}

const ConnectedAnecdoteForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm

