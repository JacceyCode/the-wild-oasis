import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTable from "../features/bookings-v1/BookingTable";
import BookingTableOperations from "../features/bookings-v1/BookingTableOperations";

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>

      <BookingTable />
    </>
  );
}

export default Bookings;
