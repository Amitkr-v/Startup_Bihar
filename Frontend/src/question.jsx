import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './question.css'

const Question = (props) => {
  return (
    <div className="question-container">
      <span>
        {props.text ?? (
          <Fragment>
            <span className="question-text">Q1. Registration Number/CIN</span>
          </Fragment>
        )}
      </span>
      <input type="text" className="question-input-answer input" />
    </div>
  )
}

Question.defaultProps = {
  text: undefined,
}

Question.propTypes = {
  text: PropTypes.element,
}

export default Question
