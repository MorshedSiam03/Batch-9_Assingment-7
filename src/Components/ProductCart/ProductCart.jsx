import PropTypes from 'prop-types'
import SideBar from '../SideBar/SideBar'
import PrepareCard from '../PrepareCard/PrepareCard'

const ProductCart = ({cooks,handlePreparing,prepared}) => {
    const costMap = prepared.map(cost => {return cost.preparing_time})
    const caloriesMap = prepared.map(cal => {return cal.calories})
    const totalTime = costMap.reduce((a,b) => a+b,0)
    const totalCalories = caloriesMap.reduce((a,b) => a+b,0)
  return (
    <div className="md:w-2/5 container mx-auto">
        <div className="mt-12 border rounded-lg ">
      <h1 className="text-center mt-3 mb-3 font-bold text-[#282828] text-3xl">
        Want to cook: {cooks.length - prepared.length}
      </h1>
      <hr />
      <div className="overflow-x-auto  ">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cooks.map((cook,index) => (
              <SideBar key={cook.recipe_id} handlePreparing={handlePreparing} index={index} cook={cook}></SideBar>
            ))}
            
          </tbody>
        </table>
        <hr />
            <h1 className="text-center mt-3 font-bold text-[#282828] text-3xl">Currently cooking: {prepared.length}</h1>
            <table className="table">
          
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
           {
            prepared.map((prepare,index) => <PrepareCard key={prepare.recipe_id}  index={index} prepare={prepare}></PrepareCard>)
           }
            <tr>
                <td></td>
                <td></td>
                <td>Total Time = {totalTime} minutes</td>
                <td>Total Calories = {totalCalories} calories</td>
            </tr>
          </tbody>
        </table>
        <hr />
      </div>
    </div>
    </div>
  )
}

ProductCart.propTypes = {
    cooks: PropTypes.array,
    prepared: PropTypes.array,
    handlePreparing: PropTypes.any
}

export default ProductCart
