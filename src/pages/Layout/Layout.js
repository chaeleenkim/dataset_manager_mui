import "./Layout.css";
import UpperPageArea from "../../components/organisms/UpperPageArea/UpperPageArea";
import FilterArea from "../../components/organisms/FilterArea/FilterArea";

function Layout() {
  return (
    <div className="Layout">
      <UpperPageArea />
      <FilterArea />
    </div>
  );
}

export default Layout;
