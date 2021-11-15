import { useParams, useNavigate } from "react-router-dom";
import {useState, useEffect} from "react"

const Show = (props) => {
    // grab the navigate function
  const navigate = useNavigate()
  // get the params object
  const params = useParams();
  // grab the id from params
  const id = params.id;
  // grab cheese from props
  const cheese = props.cheese;
  // create state for form
  const [editForm, setEditForm] = useState({})
  // useEffect to set state to the existing singleCheese, when the data is available
  //the c's are for a single sheese on the shp=ow page, i think
  useEffect(() => {
      if(props.cheese){
          const singleCheese = cheese.find((c) => c._id === id);    
          setEditForm(singleCheese)
      }
  }, [props.cheese])

  if (props.cheese) {
    // grab the target singleCheese from the cheese array
    const singleCheese = cheese.find((c) => c._id === id);

     // handleChange function for form
     const handleChange = (event) => {
        // create a copy of the state
        const newState = {...editForm}
        // update the newState
        newState[event.target.name] = event.target.value
        // update the state
        setEditForm(newState)
    }

    // handleSubmit for form
    const handleSubmit = (event) => {
        // prevent the refresh
        event.preventDefault()
        // pass the form data to updateCheese
        props.updateCheese(editForm)
        // redirect cheese back to index
        navigate("/")
    }

    if (props.cheese) {
        // grab the target singleCheese from the cheese array
        const singleCheese = cheese.find((p) => p._id === id);
        
        // handleChange function for form
        const handleChange = (event) => {
            // create a copy of the state
            const newState = {...editForm}
            // update the newState
            newState[event.target.name] = event.target.value
            // update the state
            setEditForm(newState)
        }
    
    // handleSubmit for form
    const handleSubmit = (event) => {
        // prevent the refresh
        event.preventDefault()
        // pass the form data to updatePeople
        props.updateCheese(editForm, singleCheese._id)
        // redirect people back to index
        navigate("/")
    }


    const removeCheese = () => {
        props.deleteCheese(singleCheese._id)
        navigate("/")
    }
   
        const form = (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={editForm.name}
                name="name"
                placeholder="name"
                onChange={handleChange}
              />
              <input
                type="text"
                value={editForm.image}
                name="image"
                placeholder="Image URL"
                onChange={handleChange}
              />
              <input
                type="text"
                value={editForm.originated}
                name="originated"
                placeholder="originated"
                onChange={handleChange}
              />
              <input type="submit" value="Update singleCheese" />
            </form>
          );


    
        return (
          <div className="singleCheese">
            <h1>{singleCheese.name}</h1>
            <h2>{singleCheese.originated}</h2>
            <img src={singleCheese.image} alt={singleCheese.name} />
            <button onClick={removeCheese}>DELETE cheese</button>
            {form}
          </div>
        );
      }
    

  } else {
    return <h1>No singleCheese</h1>;
  }
};
//smh
export default Show;