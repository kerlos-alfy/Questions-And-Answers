import { Container, Col, Row } from "react-bootstrap";

import "./App.css";
import FormInput from "./components/FormInput";
import QAList from "./components/QAList";
import data from "./data";

function App() {
	return (
		<div className="font text-center color-body">
			<Container className="p-5">
				<Row className="justify-content-center">
					<Col sm="4">
						<div className="fs-3 text-center py-2">أسئلة وأجوبة شائعة ❓</div>
					</Col>
					<Col sm="8">
						<FormInput />
						<QAList data={data} />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;