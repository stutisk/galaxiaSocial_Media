import { Link } from "react-router-dom";
const Dsidebar =() => {
    return(
        <>
<Link to="/">
        {" "}
        <div>home</div>
      </Link>
      <Link to="explore">
        {" "}
        <div>Explore</div>
      </Link>
      <Link to="bookmarks">
        {" "}
        <div>Bookmarks</div>
      </Link>
        </>
    )
}
export {Dsidebar}