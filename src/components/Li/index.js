import React from "react";

// RR
import { useNavigate } from "react-router-dom";

function Li({ text, route }) {
	const navigate = useNavigate();

	return <li onClick={(e) => navigate(route)}>{text}</li>;
}

export default Li;
