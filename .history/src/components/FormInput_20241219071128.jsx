import { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import { question } from "../data";

// eslint-disable-next-line react/prop-types
const FormInput = ({ onAdd }) => {
	const [qu, setQu] = useState("");
	const [an, setAn] = useState("");
	const addNewItem = () => {
		question.push({ question: qu, answer: an });
		onAdd();
	};
	console.log(question);
	return (
		<Row className="my-3">
			<Col sm="5">
				<Form.Control onChange={(e) => setQu(e.target.value)} type="text" placeholder="ادخل السوال" />
			</Col>

			<Col sm="5">
				<Form.Control onChange={(e) => setAn(e.target.value)} type="text" placeholder="ادخل الاجابه" />
			</Col>
			<Col sm="2">
				<button onClick={addNewItem} className="btn-color w-100" type="submit">
					اضافة
				</button>
			</Col>
		</Row>
	);
};

export default FormInput;