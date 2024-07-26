import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/FakeAuthContext";
import { useEffect } from "react";
import PropTypes from "prop-types";

export default function ProtectedRoute({ children }) {
  const { isAuthenticating } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticating) navigate("/");
    },
    [isAuthenticating, navigate]
  );
  return isAuthenticating ? children : null;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
