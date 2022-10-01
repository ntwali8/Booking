import ICalLink from "react-icalendar-link"

export const CreateIcs  = (name, email, phone, start, end, reason) => {
    const event = {
        title: name,
        description: "You've booked on appointment",
        startTime: start,
        endTime: end,
        location: "Kampala, Uganda",
        attendees: [
          "Company name",
        ]
      }
      return (
        <ICalLink event={event}>
            Add to calendar
        </ICalLink>
      )
}