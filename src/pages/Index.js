import {useState} from "react"
import {Link} from "react-router-dom"

const Index = (props) => {

  // state to hold form data
  const [newForm, setNewForm] = useState({
      name: "",
      image: "",
      originated: ""
  })

  //handleChange function to sync input with state
  const handleChange = (event) => {
      // make a copy of state
      const newState = {...newForm}
      // update the newState
      newState[event.target.name] = event.target.value
      // update the state
      setNewForm(newState)
  }

   // handleSubmit function for when form is submitted
   const handleSubmit = (event) => {
    // prevent the page from refreshing
    event.preventDefault()
    // pass the form data to createCheese function
    props.createCheese(newForm)
    // reset the form to empty
    setNewForm({
      name: "",
      image: "",
      originated: ""
  })
}

const form = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newForm.name}
        name="name"
        placeholder="name"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.image}
        name="image"
        placeholder="Image URL"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.originated}
        name="originated"
        placeholder="originated"
        onChange={handleChange}
      />
      <input type="submit" value="Create Single Cheese" />
    </form>
  );



  if (props.cheese) {
    return (
      <section>
        {form}
        {props.cheese.map((singleCheese) => {
          return (
            <div key={singleCheese._id} className="singleCheese">
              <Link to={`/cheese/${singleCheese._id}`}>
                <h1>{singleCheese.name}</h1>
              </Link>
              <img src={singleCheese.image} alt={singleCheese.name} />
              <h3>{singleCheese.originated}</h3>
            </div>
          );
        })}
      </section>
    );
  } else {
    return (
      <section>
        {form}
        <h1>Loading...</h1>
      </section>
    );
  }
};

export default Index;