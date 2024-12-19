import { Col, Row, Form } from "react-bootstrap";

const FormInput = ({ onAdd }) => {
	const addNewItem = () => {};
	return (
		<Row className="my-3">
			<Col sm="5">
				<Form.Control type="text" placeholder="ادخل السوال" />
			</Col>

			<Col sm="5">
				<Form.Control type="text" placeholder="ادخل الاجابه" />
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
