/** @jsx jsx */
import { jsx } from "theme-ui"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        Sitio emergente elaborado por{" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        Fernando Mayorga
      </p>
    </div>
  </footer>
)

export default Footer
