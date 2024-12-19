/* eslint-disable react/prop-types */
import { Row, Accordion } from "react-bootstrap";

const QAList = ({ data }) => {
	return (
		<Row>
			<Accordion>{data.length >= 1 ? <h1>kerooo</h1> : <div className="text-center fs-4 p-5">لا يوجد أسئلة</div>}</Accordion>
		</Row>
	);
};

export default QAList;
