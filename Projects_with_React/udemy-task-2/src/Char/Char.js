import React from "react";

const Char = (props) => {
	const styles = {
		display: "inline-block",
		padding: "16px",
		textAlign: "center",
		margin: "10px",
		border: "2px solid black",
		borderRadius: "50px",
		color: "blue",
	};
	return <div style={styles}>{props.character}</div>;
};

export default Char;
