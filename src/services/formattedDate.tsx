import moment from "moment";
import "moment/locale/pt-br";

const formattedDate = (date: string) => moment(date).format("ll");

export default formattedDate;