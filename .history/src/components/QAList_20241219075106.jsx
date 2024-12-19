/* eslint-disable react/prop-types */
import { Row, Accordion } from "react-bootstrap";
import { question } from "../data";

const QAList = ({ data, deleteOneItem }) => {
	const dataLocal = JSON.parse(localStorage.getItem("items"));

	const onDeleteItem = (ID) => {
		if (data.length >= 1) {
			const index = question.findIndex((item) => item.id === ID);
			question.splice(index, 1);
			deleteOneItem(question);
		}
	};
	return (
		<Row>
			<Accordion>
				{data.length >= 1 ? (
					data.map((item, index) => {
						return (
							<Accordion.Item eventKey={item.id} key={index}>
								<Accordion.Header>
									<div className="m-auto">{item.question}</div>
								</Accordion.Header>
								<Accordion.Body className="text-end">
									<div className="px-3 d-inline ">{item.answer}</div>
									<button onClick={() => onDeleteItem(item.id)} className="btn-color">
										مسح
									</button>
								</Accordion.Body>
							</Accordion.Item>
						);
					})
				) : (
					<div className="text-center fs-4 p-5">لا يوجد أسئلة</div>
				)}
			</Accordion>
		</Row>
	);
};

export default QAList;
