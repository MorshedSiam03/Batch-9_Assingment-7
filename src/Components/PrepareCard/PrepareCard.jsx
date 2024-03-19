import PropTypes from 'prop-types'

const Prepare = ({prepare,index}) => {
    const {
        recipe_name,
        preparing_time,
        calories,
      } = prepare;
  return (
    <>
      <tr>
              <th>{index+1}</th>
              <td>{recipe_name}</td>
              <td>{preparing_time}</td>
              <td>{calories}</td>
              
        </tr>  
    </>
  )
}

Prepare.propTypes = {
    prepare: PropTypes.any,
    index: PropTypes.any
}

export default Prepare
