import React from 'react'
import { connect } from 'react-redux'

import { voteAnecdote  } from '../reducers/anecdoteReducer'
import { setNote, clearNote } from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {


  render() {
    const anecdotesToShow = () => {
      console.log('anecdotesToShow')
      console.log(this.props.filter.content)
      if(this.props.filter.content === ''){
        return this.props.anecdotes
      }

      return this.props.anecdotes
        .filter(a => a.content.includes(this.props.filter.content))
    }

    const anecdotes = anecdotesToShow()
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => {
                this.props.voteAnecdote(anecdote.id)
                this.props.setNote(anecdote.content)
                setTimeout(() => {
                  this.props.clearNote()
                }, 5000)
              }}>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  setNote,
  clearNote
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdoteList

