import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers";
import { useDispatch, useSelector } from "react-redux";
import { cn } from "../../lib/utils";
import { setEvent, setSelectedDate, deleteEvent, editEvent } from "../../redux/actions";
import dayjs from "dayjs";
import { toast } from "react-hot-toast";
import { useLocalStorageState } from "../../hooks/useLocalStorage";

const CalendarWithNotes = ({ minimized }) => {
    const dispatch = useDispatch();
    const { selectedDate, events: reduxEvents } = useSelector((state) => state.event);
    const [events, setEvents] = useLocalStorageState({}, "calendar-events");
    const [newNote, setNewNote] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);



    const selectedDateObj = selectedDate ? dayjs(selectedDate) : null;

    const handleDeleteNote = () => {
        if (selectedDateObj) {
            const date = selectedDateObj.format("YYYY-MM-DD");
            dispatch(deleteEvent(date));
            setEvents((prevEvents) => {
                const updatedEvents = { ...prevEvents };
                delete updatedEvents[date];
                return updatedEvents;
            });
            toast.success("Sự kiện đã được xóa!");
            setNewNote("");
            setIsModalOpen(false);
            setIsEditing(false);
        }
    };
    const handleEditNote = () => {
        if (selectedDateObj) {
            setNewNote(reduxEvents[selectedDateObj.format("YYYY-MM-DD")]);
            setIsEditing(true);
        }
    };
    const handleSaveNote = () => {
        if (selectedDateObj) {
            const date = selectedDateObj.format("YYYY-MM-DD");
            if (isEditing) {
                dispatch(editEvent({ date, event: newNote }));
                setEvents((prevEvents) => ({ ...prevEvents, [date]: newNote }));
                toast.success("Sự kiện đã được chỉnh sửa!");
            } else {
                dispatch(setEvent({ date, event: newNote }));
                setEvents((prevEvents) => ({ ...prevEvents, [date]: newNote }));
                toast.success("Sự kiện đã được thêm!");
            }
            setNewNote("");
            setIsEditing(false);
        }
    };

    const handleSelectDate = (date) => {
        dispatch(setSelectedDate(date.format("YYYY-MM-DD")));
        setIsModalOpen(true);
    };
    if (minimized) {
        return null;
    }
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div style={{ display: "flex", gap: "10px", height: "30vh", overflowY: "auto", color: "white" }}>
                {/* Lịch */}
                <div style={{ flex: 1, overflowY: "auto", scrollBehavior: "smooth", height: "100%" }}>
                    <DateCalendar
                        onChange={handleSelectDate}
                        sx={{
                            color: "white",
                            width: "auto",
                            flexGrow: 1,
                            overflowY: "auto",
                            fontFamily: 'pixel, sans-serif !important',
                            '& .MuiSvgIcon-root': {
                                color: "white",
                            },
                            '& .MuiDayCalendar-weekDayLabel': {
                                fontFamily: 'pixel, sans-serif !important',
                                fontSize: '17px', 
                                color: "white", 
                            },
                            "& .MuiDayPicker-day.Mui-selected": {
                                backgroundColor: "blue",
                                color: "white",
                                borderRadius: "50%",
                            },
                        }}
                        slotProps={{
                            day: {
                                className: '!text-[17px] !text-white !font-[pixel]',
                            },
                        }}
                        dayOfWeekFormatter={(date) => date.format('ddd')}
                    />

                </div>
                <div>
                    {isModalOpen && selectedDateObj && (
                        <div className={cn("gap-4")}>
                            <div className={cn("flex justify-end")}>
                                <button className={cn(" py-1 px-3  hover:text-xl transition-all duration-200")} onClick={() => setIsModalOpen(false)}>Đóng</button>
                            </div>
                            <h3>Sự kiện cho ngày: {selectedDateObj.format("YYYY-MM-DD")}</h3>
                            {reduxEvents[selectedDateObj.format("YYYY-MM-DD")] && !isEditing ? (
                                <div>
                                    <p className={cn("text-xl mb-3")}>{reduxEvents[selectedDateObj.format("YYYY-MM-DD")]}</p>
                                    <button
                                        className={cn("p-1 text-white hover:text-xl transition-all duration-200 bg-blue-500")}
                                        onClick={handleEditNote}>Chỉnh sửa sự kiện</button>
                                    <button
                                        onClick={handleDeleteNote}
                                        className={cn(
                                            "ml-10 p-1 text-white hover:text-xl transition-all duration-200 bg-red-500"
                                        )}
                                    >
                                        Xóa sự kiện
                                    </button>
                                </div>
                            ) : (
                                <div>
                                    <textarea
                                        value={newNote}
                                        onChange={(e) => setNewNote(e.target.value)}
                                        placeholder="Thêm hoặc chỉnh sửa ghi chú cho ngày này"
                                        style={{ width: "100%", height: "100px", color: "black" }}
                                    />
                                    <button onClick={handleSaveNote}
                                        className={cn("p-1 text-white hover:text-xl transition-all duration-200 bg-blue-500")}
                                    >
                                        {isEditing ? "Lưu chỉnh sửa" : "Thêm sự kiện"}
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>

            </div>
        </LocalizationProvider>
    );
};

export default CalendarWithNotes;
