import Oven from "./Oven"
import Sink from "./Sink"

function Kitchen(props) {
  return (
    <>
      <h2>Kitchen</h2>
      <Sink/>
      <Oven/>
    </>
  )
}

export default Kitchen