import React from 'react'
// Show notification container with notification message.
const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>You have already entered this letter - you can literally see it on the screen!</p>
    </div>
  )
}

export default Notification