import React from 'react'
import { connect } from 'react-redux'

class Notification extends React.Component {
  render() {
    return (
      <div className="info">
        {this.props.notification.content}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const mapDispatchToProps = {
}

const ConnectedNotification = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification)

export default ConnectedNotification

