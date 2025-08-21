import React, { useEffect, useState, useRef } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useSearchParams, useNavigate } from "react-router-dom";
import { activateUserApi } from "../../services/authApi";
import { Alert } from "react-bootstrap";

export const VerifyUser = () => {
  const [isPending, setIsPending] = useState(true);
  const [searchParams] = useSearchParams();
  const [response, setResponse] = useState({});
  const sessionId = searchParams.get("sessionId");
  const t = searchParams.get("t");
  const fetchRef = useRef(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (sessionId && t && fetchRef.current) {
      (async () => {
        const result = await activateUserApi({ sessionId, t });
        setResponse(result);
        setIsPending(false);
      })();
      fetchRef.current = false;
    }
    if (response.status === "success") {
      setTimeout(() => {
        navigate("/signin");
      }, 3000);
    }
  }, [sessionId, t, navigate, response.status]);
  return (
    <div className="py-5 p-5">
      {isPending && (
        <div className="m-auto" style={{ width: "450px" }}>
          <div className="d-flex justify-content-center">
            <Spinner animation="border" variant="primary" />
          </div>
          <div>Please wait... Do not go back or refresh the browser.</div>
        </div>
      )}
      {response.message && (
        <Alert variant={response.status === "success" ? "success" : "danger"}>
          {response.message}
        </Alert>
      )}
    </div>
  );
};
