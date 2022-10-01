import React, { useState } from "react";
import axios from "axios";
import ICalLink from "react-icalendar-link";

export const User = () => {

    //state for status of sending email
    const [sent, setSent] = useState(false);
    const [text, setText] = useState("");

    //state for input fields
    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [phone, setPhone] = useState(0);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [radio, setRadio] = useState("Other");
    const [event, setEvent] = useState({});

    const reasons = ["OOP", "Deferment","Other"];

    const handleSubmit = (e) => {
        e.preventDefault();
        const reason = radio;
        const start = startDate.concat(":", startTime);
        const end = endDate.concat(":", endTime);

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
        setEvent(event);
        handleSend()
    }

    const handleSend = async () => {
        setSent(true) 
        try{
            await axios.post("https://localhost:4000/send_mail")
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="flex flex-col justify-center my-10">
                <ICalLink event={event}>Add to calendar</ICalLink>
                <p className="text-4xl text-center my-4">
                    Hi, <span className="font-bold">User Name</span>. Welcome to our site
                </p>
                <div className="h-0.5 bg-gray-200 w-full"></div>
                {!sent ? (
                    <div className="w-5/6 py-6 mx-auto">
                    <p className="text-4xl my-4 text-center">BOOK APPOINTMENT</p>
                    <div className="border border-gray-300 rounded-lg shadow-lg p-4 grid grid-cols-3">
                        <div className="col-span-2 border-r border-gray-300">
                            <form>
                                {/* Section for checkbox */}
                                <div>
                                    <p className="text-base text-center my-2">Select Reason:</p>
                                    <div  className="flex justify-center space-x-6">
                                        {reasons.map((reason, index)=>
                                            (
                                                <div  className="form-check" key={index}>
                                                    <input  className="form-check-input appearance-none 
                                                        rounded-full h-4 w-4 border border-gray-300 bg-white 
                                                        checked:bg-blue-600 checked:border-blue-600 
                                                        focus:outline-none transition duration-200 mt-1 align-top
                                                        bg-no-repeat bg-center bg-contain float-left mr-2 
                                                        cursor-pointer"
                                                        type="radio"
                                                        name="reason"
                                                        value={reason}
                                                        onClick={()=> setRadio(reason)}
                                                    />
                                                    <label  className="form-check-label inline-block text-gray-800" >
                                                        {reason}
                                                    </label>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                                {/* Section for user details */}
                                <div className="pr-4 mt-4">
                                    <div className="mb-6">
                                        <input
                                            type="email"
                                            className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e)=>{
                                                setName(e.target.value);
                                            }}
                                            required
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="number"
                                            className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="Phone"
                                            value={phone}
                                            onChange={(e)=>{
                                                setPhone(e.target.value);
                                            }}
                                            required
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="email"
                                            className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e)=>{
                                                setEmail(e.target.value);
                                            }}
                                            required
                                        />
                                    </div>
                                    <div className="mb-6 flex">
                                        <p>Reservation: </p>
                                        <div  className="ml-4 flex items-center justify-center space-x-2">
                                            <div className="flex flex-col space-y-2">
                                                <label className="text-gray-700">Select a start date</label>
                                                <input 
                                                    type="date"
                                                    className="border border-gray-300 rounded px-2 py-1"
                                                    value={startDate}
                                                    onChange={(e)=>{
                                                        setStartDate(e.target.value);
                                                    }}
                                                    required
                                                />
                                                <input 
                                                    type="time"
                                                    className="border border-gray-300 rounded px-2 py-1"
                                                    value={startTime}
                                                    onChange={(e)=>{
                                                        setStartTime(e.target.value);
                                                    }}
                                                    required
                                                />
                                            </div>
                                            <div><p>-</p></div>
                                            <div className="flex flex-col space-y-2">
                                                <label className="text-gray-700">Select an end date</label>
                                                <input 
                                                    type="date"
                                                    className="border border-gray-300 rounded px-2 py-1"
                                                    value={endDate}
                                                    onChange={(e)=>{
                                                        setEndDate(e.target.value);
                                                    }}
                                                    required
                                                />
                                                <input 
                                                    type="time"
                                                    className="border border-gray-300 rounded px-2 py-1"
                                                    value={endTime}
                                                    onChange={(e)=>{
                                                        setEndTime(e.target.value);
                                                    }}
                                                    required
                                                />
                                            </div>
                                            <div className="items-center mx-auto flex">
                                                <button onClick={handleSend} className="rounded px-3 py-2 bg-blue-700 text-white hover:bg-blue-900">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-span-1 p-2">
                            <div>
                                <p className="text-base text-center my-2">Cancel Booking</p>
                            </div>
                            <div className="mb-6">
                                <input
                                    type="text"
                                    className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Enter Booking ID"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    type="text"
                                    className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Enter email"
                                    required
                                />
                            </div>
                            <div className="">
                                <button className="mx-auto flex rounded px-3 py-2 bg-blue-700 text-white hover:bg-blue-900">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="my-4 flex">
                        <button className="px-3 py-2 mx-auto bg-red-500 rounded text-white hover:bg-red-700">Sign out</button>
                    </div>
                </div>
                ): (
                    <p>Email sent</p>
                )}
            </div>
        </>
    );
}
