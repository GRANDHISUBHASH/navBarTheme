// Write your code here
import Navbar from '../Navbar'

const NotFound = () => (
  <div>
    <Navbar />
    <div>
      <h1>Lost Your Way</h1>
      <p>We cannot seem to find the page</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
      />
    </div>
  </div>
)

export default NotFound
