/* eslint-disable react/prop-types */
import { Row, Accordion } from "react-bootstrap";

const QAList = ({ data, deleteOneItem }) => {
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
									<button className="btn-color">مسح</button>
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
