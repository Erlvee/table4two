import React, {useState} from 'react';
import moment from 'moment';


function Calendar(props) {
    const [currentDate, setCurrentDate] = useState(moment().format());
    const [selectedDate, setSelectedDate] = useState(moment().format());
   
    const header = () => {
        const dateFormat = "MMM YYYY";

        return (
            <div className="header row flex-middle">
                <div className="column col-start">
                    <div className="icon" onClick={prevMonth}>
                        chevron_left
                    </div>
                </div>
                <div className="column col-center">
                    <span>{moment(currentDate).format(dateFormat)}</span>
                </div>
                <div className="column col-end">
                    <div className="icon" onClick={nextMonth}>
                        chevron_right
                    </div>
                </div>
            </div>
        );
    };

    const daysOfWeek = () => {
        const dateFormat = "ddd";
        const days = [];
        let startDate = moment(currentDate).startOf('isoWeek');

        for (let i = 0; i < 7; i+=1) {
            days.push(<div className="column col-center" key={i}>
                            {moment(startDate).add(i, 'days').format(dateFormat)}
                        </div>
            );
        }
        return <div className="days row">{days}</div>
    };

    const cells = () => {
        const monthStart = moment(currentDate).startOf('month');
        const monthEnd = moment(currentDate).endOf('month');
        const startDate = moment(monthStart).startOf('isoWeek');
        const endDate = moment(monthEnd).endOf('isoWeek');
        const dateFormat = "D";
        const rows = [];

        
        let days = [];
        let day = startDate;
        let formattedDate = "";

        while (day <= endDate) {
            for (let i = 0; i < 7; i+=1) {
                formattedDate = moment(day).format(dateFormat);
                const cloneDay = day;

                days.push(
                    <div className={`column cell ${!moment(day).isSame(monthStart,'month') 
                    ? "disabled" : moment(cloneDay).isSame(selectedDate) 
                    ? "selected": ""}`} 
                    key={day}
                    onClick = {() => {onDateClick(moment(cloneDay));
                    props.renderCalendar(!props.initCalendar);
                    props.setTableState(!props.initTables)}} 
                    style={!moment(day).isBefore(currentDate, "day") ? {backgroundColor: cellsColor()} : {backgroundColor: "white"} }>
                        <span className="number">{formattedDate}</span>
                        <span className="bg">{formattedDate}</span>
                    </div>
                );
                day = moment(day).add(1, 'day');
            }
            rows.push(
                <div className="row" key={day}>{days}</div>
            );
            days = [];
        }
        return <div className="body">{rows}</div>
    }


    const onDateClick = cloneDay => {
        setSelectedDate(cloneDay);
    }

    const nextMonth = () => {
        setCurrentDate(moment(currentDate).add(1, 'month'));
    };

    const prevMonth = () => {
        setCurrentDate(moment(currentDate).subtract(1, 'month'));
    };

    const cellsColor = () => {
        const colors = ["rgba(255, 0, 0, 0.5)", "rgba(255,165,0, 0.5)", "rgba(0,128,0, 0.5)"];
        let randomColor = colors[Math.floor(Math.random()*colors.length)];
        return randomColor
    }
    

    return (
        <div className="calendarContainer">
            <div className="calendar">
                <div>{header()}</div>        
                <div>{daysOfWeek()}</div>        
                <div>{cells()}</div>
            </div>
            <div className="belowCalendarBtn">
                <input type="button" value="Back" onClick={() => {props.renderCalendar(!props.initCalender); props.renderRestComponent(!props.initRestaurant);}}></input>
            </div>
        </div>
   );
}
export default Calendar