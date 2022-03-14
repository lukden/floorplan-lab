import Kitchen from "./Kitchen"
import Bath from "./Bath"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"


const Floorplan = (props) => {
  return (
  <>
    <div>
    <Kitchen/>
    </div>
    <div>
    <LivingRoom/>
    </div>
    <div>
    <Bath bathSize="Half"/>
    </div>
    <div>
    <Bedroom bedNum={1}/>
    </div>
    <div>
    <Bath bathSize="Full"/>
    </div>
    <div>
    <Bedroom bedNum={2}/>
    </div>
    <div>
    <Bedroom bedNum={3}/>
    </div>
  </>
  )
}

export default Floorplan