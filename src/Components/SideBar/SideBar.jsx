import { useState } from 'react'
import PropTypes from 'prop-types'

const SideBar = ({cook, index, handlePreparing}) => {
    const {recipe_name,
           preparing_time,
           calories,
            } = cook;
    const [isHidden, setHidden] = useState(false);
    const handleClick = () => {
                handlePreparing(cook)
                setHidden(true)
            }
  return (
    <>
      {
            !isHidden && 
            <tr>
              <th>{index+1}</th>
              <td>{recipe_name}</td>
              <td>{preparing_time}</td>
              <td>{calories}</td>
              <td><button onClick={handleClick} className="btn rounded-3xl bg-[#0BE58A] border-0">Preparing</button></td>
            </tr> 
           }
    </>
  )
}

SideBar.propTypes = {
   cook: PropTypes.any,
   index: PropTypes.any,
   handlePreparing: PropTypes.any
}

export default SideBar
