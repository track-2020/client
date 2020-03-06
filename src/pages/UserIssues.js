import React, { useState } from 'react';
import PropTypes from 'prop-types';
import issues from '../../assets/issues';

const UserIssues = ({ history }) => {

  const [selectedIssues, setSelectedIssues] = useState([])
  const isRadioDisabled = selectedIssues.length >= 5;


  const RadioButton = (label, value) => {
    const isSelected = selectedIssues.includes(value);
    return ( 
      <div key={label} className="radio">
          <label>
            <input 
              type="radio" 
              value={value} 
              checked={isSelected}
              onChange={()=> {}}
              onClick={({target}) => {
                isSelected 
                ? setSelectedIssues(selectedIssues.filter(issue => issue !== value))
                : setSelectedIssues([...selectedIssues, target.value])
              }} 
              disabled={isRadioDisabled && !isSelected} />
            {label}
          </label>
        </div>
  )}

  const IssueRadioButtons = issues.map(issue => RadioButton(issue.label, issue.value))

  const onSubmit = e => {
    e.preventDefault();
    console.log(selectedIssues)
    history.push('/')
  }


return (
  <div>
    <form onSubmit={onSubmit}>
      {IssueRadioButtons}
      <button>Choose Issues</button>
    </form>
  </div>
)

}

UserIssues.propTypes = {
  history: PropTypes.object.isRequired
}

export default UserIssues

