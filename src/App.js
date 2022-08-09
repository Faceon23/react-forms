import { hasFormSubmit } from "@testing-library/user-event/dist/utils"
import { useEffect, useState } from "react"
import "./App.css"

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [validForm, setValidForm] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [author, setAuthor] = useState("todd albert")

  useEffect(() => {
    if (title.length > 3 && description.length > 10) {
      setValidForm(true)
    } else {
      setValidForm(false)
    }
    console.log("Wow! Something changed")
  }, [title, description, author])

  // console.log(title)
  // console.log(description) async (e)

  async function FormSubmit(e) {
    e.preventDefault()

    if (!validForm) {
      setErrorMessage("Not a valid form")
      return
    }

    try {
    } catch (error) {
      console.error(error)
      setErrorMessage("there was an error" + error.toString())
    }

    // console.log("form submitted")

    // const comment = {
    //   title:title,
    //   description:description,
    //   author:author,

    // }
    const comment = {
      title,
      description,
      author,
    }
    setErrorMessage("")
    setFormSubmitted(true)
    alert("Wow Submitted")
    setValidForm(true)

    console.log("form submitted with", comment)
    // really submit to an api

    const results = await fetch("https://sql.bocacode.com/comments", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    })

    console.log(results)
    const data = await results.json()
    console.log(data)
  }

  return (
    <div className="App">
      <form onSubmit={FormSubmit}>
        <h1>Comments</h1>

        {/* here goes the title */}
        <label>Title </label>
        <input
          // required
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <h3>{title}</h3>

        {/* this is the description */}
        <label>Description </label>
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value)
          }}
        ></textarea>
        <h3>{description}</h3>

        {/* this is the Author */}
        <label>Author </label>
        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value)
          }}
        >
          <option value="">Choose One</option>
          <option value="todd albert"> Doctor Todd</option>
          <option value="rod">Rod</option>
          <option value="ludwigson">Ludwigson</option>
          <option value="other">Other</option>
        </select>
        <h3>author</h3>
        {!formSubmitted && <button>Submit Form</button>}
        {!errorMessage && (
          <h1>
            There was an error: Not a valid form
            <br />
            {errorMessage}
          </h1>
        )}
      </form>
    </div>
  )
}

export default App
