import React from 'react'

const CourseDifficultyEntry = ({name, value}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  );
}

export default CourseDifficultyEntry