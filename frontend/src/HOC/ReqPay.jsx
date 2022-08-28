import { useSelector } from "react-redux/";
import { Navigate, useLocation } from "react-router-dom";
import { getItem } from "../Utils/localStorage";

const ReqPay = ({ children }) => {
  //   const { isAuth } = useSelector((state) => state.authReducer);
  const payment = getItem("payment");
  const location = useLocation();

  if (payment) {
    return children;
  } else {
    return <Navigate to="/upgrade" state={{ from: location }} replace></Navigate>;
  }
};

export default ReqPay;
