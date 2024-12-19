/* eslint-disable react/prop-types */
import { Row, Accordion } from "react-bootstrap";

const QAList = ({ data }) => {
	return (
		<Row>
			<Accordion>
				{data.length > 0 ? (
					data.map((item, index) => {
						return (
							<Accordion.Item eventKey={index.toString()} key={index}>
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
					<div className="text-center font-title">لا يوجد أسئلة</div>
				)}
			</Accordion>
		</Row>
	);
};

export default QAList;
