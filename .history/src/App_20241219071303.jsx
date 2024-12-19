import { Container, Col, Row } from "react-bootstrap";
import "./App.css";
import FormInput from "./components/FormInput";
import QAList from "./components/QAList";
import { question } from "./data";
import { useState } from "react";

function App() {
	const [data, setData] = useState(question);

	const addItem = () => {
		setData([...question]);
	};
	return (
		<div className="font text-center color-body">
			<Container className="p-5">
				<Row className="justify-content-center">
					<Col sm="4">
						<div className="fs-3 text-center py-2">
							أسئلة وأجوبة شائعة
							<span style={{ display: "inline-block", transform: "scaleX(-1)" }}>❓</span>
						</div>
					</Col>
					<Col sm="8">
						<FormInput onAdd={addItem} />
						<QAList data={data} />
						{data.length >= 1 ? <button className="btn-color w-100 my-3">مسح الكل</button> : null}
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
